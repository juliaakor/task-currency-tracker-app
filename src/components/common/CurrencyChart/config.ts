/* eslint-disable no-param-reassign */

import { Chart, ChartData, ChartOptions, TimeUnit } from 'chart.js';

import { ChartItem } from './types';

const chartColors = {
  backgroundColorDown: 'rgba(234, 57, 67, 1)',
  backgroundColorUp: 'rgba(22, 199, 130, 1)',
  borderColorDown: 'rgba(234, 57, 67, 1)',
  borderColorUp: 'rgba(22, 199, 130, 1)',
  crosshairLabel: 'rgba(255, 151, 29, 1)',
  fillStyle: 'transparent',
  gridColor: 'rgba(255, 255, 255, 0.1)',
  lineColor: 'rgba(255, 255, 255, 1)',
  strokeStyle: 'rgba(0, 0, 0, 1)',
};

export function chartData(chartItems: ChartItem[]): ChartData<'bar'> {
  return {
    datasets: [
      {
        backgroundColor: (ctx) => {
          const { c, o } = ctx.raw as ChartItem;

          return c >= o ? chartColors.backgroundColorUp : chartColors.backgroundColorDown;
        },
        borderColor: (ctx) => {
          const { c, o } = ctx.raw as ChartItem;

          return c >= o ? chartColors.borderColorUp : chartColors.borderColorDown;
        },
        borderWidth: 1,
        data: chartItems,
        label: 'Currency Prices',
      },
    ],
  };
}

export function options(unit: TimeUnit, min: number, max: number, yMin: number, yMax: number): ChartOptions<'bar'> {
  return {
    layout: {
      padding: 20,
    },
    parsing: {
      xAxisKey: 'x',
      yAxisKey: 's',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          beforeBody: (ctx) => {
            const TooltipItem = ctx[0].raw as ChartItem;
            const bodyArr = [
              `Open: ${TooltipItem.o.toFixed(2)}`,
              `High: ${TooltipItem.h.toFixed(2)}`,
              `Low: ${TooltipItem.l.toFixed(2)}`,
              `Close: ${TooltipItem.c.toFixed(2)}`,
            ];

            return bodyArr;
          },
          label: () => {
            return '';
          },
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
        zoom: {
          mode: 'x',
          pinch: {
            enabled: true,
          },
          wheel: {
            enabled: true,
            speed: 0.1,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: chartColors.gridColor,
        },
        max,
        min,
        ticks: {
          display: true,
        },
        time: {
          tooltipFormat: 'MMM d, yyyy',
          unit,
        },
        type: 'time',
      },
      y: {
        beginAtZero: false,
        grid: {
          color: chartColors.gridColor,
        },
        max: yMax,
        min: yMin,
        position: 'right',
        ticks: {
          display: true,
        },
      },
    },
  };
}

export const plugins = [
  {
    beforeDatasetsDraw(chart: Chart) {
      const {
        ctx,
        data,
        scales: { y },
      } = chart;
      ctx.save();
      ctx.lineWidth = 2;
      ctx.strokeStyle = chartColors.strokeStyle;
      data.datasets[0].data.forEach((datapoint, index) => {
        const datasetData = data?.datasets[0]?.data[index] as unknown as ChartItem;

        ctx.strokeStyle = chart.getDatasetMeta(0).data[index].options.backgroundColor;
        ctx.beginPath();
        ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
        ctx.lineTo(chart.getDatasetMeta(0).data[index].x, y.getPixelForValue(datasetData.h as number));
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(chart.getDatasetMeta(0).data[index].x, chart.getDatasetMeta(0).data[index].y);
        ctx.lineTo(chart.getDatasetMeta(0).data[index].x, y.getPixelForValue(datasetData.l as number));
        ctx.stroke();
      });
    },
    id: 'candleStick',
  },
  {
    afterEvent(chart, args) {
      if (!args.inChartArea) {
        this.temp.xHoverCoor = undefined;
        this.temp.yHoverCoor = undefined;
        this.temp.hoverIndex = undefined;
        args.changed = true;

        return;
      }
      const points = chart.getElementsAtEventForMode(args.event.native as Event, 'index', { intersect: false }, true);
      this.temp.xHoverCoor = args.event.x;
      this.temp.yHoverCoor = args.event.y;

      if (points.length > 0) {
        this.temp.hoverIndex = points[0].index;
        this.temp.xHoverCoor = points[0].element.x;
        this.temp.yHoverCoor = points[0].element.y;
      }

      args.changed = true;
    },
    beforeDatasetsDraw(chart: Chart) {
      const {
        chartArea: { height, right, top },
        ctx,
        data,
        scales: { x, y },
      } = chart;
      const { hoverIndex, xHoverCoor, yHoverCoor } = this.temp;
      if (xHoverCoor !== undefined && yHoverCoor !== undefined && hoverIndex !== undefined) {
        const datasetData = data?.datasets[0]?.data[hoverIndex] as unknown as ChartItem;

        const nearestX = x.getValueForPixel(xHoverCoor);
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = chartColors.fillStyle;
        ctx.fillRect(x.getPixelForValue(nearestX as number) - 10, top, 20, height);
        ctx.restore();

        ctx.save();
        ctx.fillStyle = chartColors.crosshairLabel;
        ctx.beginPath();
        ctx.fillRect(right, y.getPixelForValue(datasetData.c as number) - 12, right, 24);
        ctx.font = '400 12px Poppins';
        ctx.fillStyle = 'black';
        ctx.textBaseline = 'middle';
        ctx.fillText(`$${datasetData.c.toFixed(2)}`, right + 10, y.getPixelForValue(datasetData.c));
        ctx.restore();
      }
    },
    id: 'crosshairHover',
    temp: {
      hoverIndex: undefined,
      xHoverCoor: undefined,
      yHoverCoor: undefined,
    },
  },
  {
    afterDatasetsDraw(chart: Chart) {
      const {
        chartArea: { bottom, left, right, top },
        ctx,
        scales: { y },
        tooltip,
      } = chart;

      const activeElements = chart.getActiveElements();

      if (tooltip && activeElements.length > 0) {
        const activePoint = activeElements[0];
        const xValue = activePoint.element.x;
        const yValue = y.getPixelForValue((tooltip.dataPoints[0].raw as ChartItem).c);

        ctx.save();
        ctx.setLineDash([]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = chartColors.fillStyle;
        ctx.beginPath();
        ctx.moveTo(xValue, top);
        ctx.lineTo(xValue, bottom);
        ctx.stroke();
        ctx.closePath();

        ctx.save();
        ctx.setLineDash([3, 3]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = chartColors.crosshairLabel;
        ctx.beginPath();
        ctx.moveTo(left, yValue);
        ctx.lineTo(right, yValue);
        ctx.stroke();
        ctx.closePath();

        ctx.restore();
        chart.canvas.style.cursor = 'crosshair';
      } else {
        chart.canvas.style.cursor = 'default';
      }
    },
    id: 'crosshair',
  },
  {
    afterDraw: (chart: Chart<'bar'>) => {
      const { ctx } = chart;
      const xAxis = chart.scales.x;
      const yAxis = chart.scales.y;

      ctx.save();
      ctx.textBaseline = 'middle';
      ctx.font = '500 16px Poppins';
      ctx.textAlign = 'center';
      ctx.translate(xAxis.left + 10, yAxis.top - 7);
      ctx.fillText('Value', 0, 0);
      ctx.restore();
      ctx.font = '500 16px Poppins';
      ctx.textAlign = 'center';
      ctx.translate(xAxis.right - 20, yAxis.bottom - 10);
      ctx.fillText('DAY', 0, 0);
      ctx.restore();

      ctx.fillStyle = chartColors.lineColor;
      ctx.beginPath();
      ctx.moveTo(xAxis.left, yAxis.bottom);
      ctx.lineTo(xAxis.right, yAxis.bottom);
      ctx.lineTo(xAxis.right - 5, yAxis.bottom - 2);
      ctx.moveTo(xAxis.right, yAxis.bottom);
      ctx.lineTo(xAxis.right - 5, yAxis.bottom + 2);
      ctx.strokeStyle = chartColors.lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(xAxis.left, yAxis.bottom);
      ctx.lineTo(xAxis.left, yAxis.top);
      ctx.lineTo(xAxis.left - 2, yAxis.top + 5);
      ctx.moveTo(xAxis.left, yAxis.top);
      ctx.lineTo(xAxis.left + 2, yAxis.top + 5);
      ctx.strokeStyle = chartColors.lineColor;
      ctx.lineWidth = 1;
      ctx.stroke();
    },
    id: 'axisLines',
  },
];
