import mapboxgl from 'mapbox-gl';
import React from 'react';
import ReactMap, {
  Marker,
  Popup,
  GeolocateControl,
  FullscreenControl,
  NavigationControl,
  ScaleControl,
} from 'react-map-gl';

import { env } from '@constants/env';

import { banks, initialView, mapStyle } from './mock';
import * as styles from './styles.scss';
import { BankMapProps, BankMapState } from './types';

mapboxgl.accessToken = env.MAPBOX_ACCESS_TOKEN || '';

export class BankMap extends React.Component<BankMapProps, BankMapState> {
  constructor(props: BankMapProps) {
    super(props);
    this.state = {
      popup: null,
    };
  }

  handleClosePopUp = () => {
    this.setState({
      popup: null,
    });
  };

  handleMarkerClick = (name: string, latitude: number, longitude: number, currencies: string[]) => () => {
    this.setState({
      popup: {
        currencies,
        isOpen: true,
        latitude,
        longitude,
        name,
      },
    });
  };

  handleMarkerKeyDown =
    (name: string, latitude: number, longitude: number, currencies: string[]) => (e: React.KeyboardEvent) => {
      if (e.key !== 'Enter') return;

      this.handleMarkerClick(name, latitude, longitude, currencies)();
    };

  render() {
    const { selectedCurrency } = this.props;
    const { popup } = this.state;

    const filteredBanks = selectedCurrency ? banks.filter((bank) => bank.currencies.includes(selectedCurrency)) : banks;

    return (
      <div className={styles.mapContainer}>
        <ReactMap initialViewState={initialView} mapStyle={mapStyle}>
          <GeolocateControl position="top-left" />
          <FullscreenControl position="top-left" />
          <NavigationControl position="top-left" />
          <ScaleControl />

          {filteredBanks.map((bank) => (
            <Marker key={bank.id} latitude={bank.latitude} longitude={bank.longitude} anchor="bottom">
              <div
                className={styles.marker}
                role="button"
                tabIndex={0}
                onClick={this.handleMarkerClick(bank.name, bank.latitude, bank.longitude, bank.currencies)}
                onKeyDown={this.handleMarkerKeyDown(bank.name, bank.latitude, bank.longitude, bank.currencies)}
                aria-label={`View details for ${bank.name}`}
              />
            </Marker>
          ))}

          {popup && popup.isOpen && (
            <Popup
              latitude={popup.latitude}
              longitude={popup.longitude}
              onClose={this.handleClosePopUp}
              closeOnClick={false}
              closeButton
              anchor="bottom-left"
              offset={20}
              className={styles.popup}
            >
              <div className={styles.modalBankName}>
                <b>{popup.name}</b>
              </div>
              <div className={styles.modalBankInfo}>Currencies: {popup.currencies.join(',')}</div>
            </Popup>
          )}
        </ReactMap>
      </div>
    );
  }
}
