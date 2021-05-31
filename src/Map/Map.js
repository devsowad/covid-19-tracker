import { Card } from '@material-ui/core';
import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import useStyle from './Map.style';
import MapCircles from './MapCircles';

const Map = ({ countries, zoom, center, selectedType, onCountryChange }) => {
  const classes = useStyle();

  return (
    <Card elevation={4}>
      <div className={classes.map}>
        <LeafletMap zoom={zoom} center={center}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* {showDataOnMap(countries, selectedType)} */}
          <MapCircles
            countries={countries}
            onCountryChange={onCountryChange}
            selectedType={selectedType}
          />
        </LeafletMap>
      </div>
    </Card>
  );
};

export default Map;
