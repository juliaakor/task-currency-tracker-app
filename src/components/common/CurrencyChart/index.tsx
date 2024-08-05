import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, TimeScale } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';
import React from 'react';
import { Chart as ChartItem } from 'react-chartjs-2';

import 'chartjs-adapter-date-fns';

import { chartData, options, plugins } from './config';
import * as styles from './styles.scss';
import { ChartItemProps } from './types';

ChartJS.register(CategoryScale, LinearScale, BarElement, TimeScale, Tooltip, Legend, zoomPlugin);

export class CurrencyChart extends React.PureComponent<ChartItemProps> {
  render() {
    const { optionsData, unit } = this.props;

    if (!optionsData.length) return null;

    const chartItems = optionsData.map(({ closePrice, date, highPrice, lowPrice, openPrice }) => ({
      c: closePrice,
      h: highPrice,
      l: lowPrice,
      o: openPrice,
      s: [openPrice, closePrice],
      x: date.getTime(),
    }));

    const yValues = chartItems.flatMap((item) => [item.o, item.c, item.h, item.l]);
    const yMin = Math.min(...yValues) - 0.05 * (Math.max(...yValues) - Math.min(...yValues));
    const yMax = Math.max(...yValues) + 0.05 * (Math.max(...yValues) - Math.min(...yValues));

    return (
      <div className={styles.chartContainer}>
        <ChartItem
          type="bar"
          plugins={plugins}
          data={chartData(chartItems)}
          options={options(unit, chartItems[chartItems.length - 1]?.x || 0, chartItems[0]?.x || 0, yMin, yMax)}
        />
      </div>
    );
  }
}
