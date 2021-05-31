import React from 'react';
import numeral from 'numeral';
import { Circle, Popup } from 'react-leaflet';
import useStyle from './MapCircle.style';

const casesTypeColors = {
  cases: {
    hex: '#ff9800',
    multiplier: 80,
  },
  recovered: {
    hex: '#4caf50',
    multiplier: 120,
  },
  deaths: {
    hex: '#f44336',
    multiplier: 200,
  },
};

const MapCircles = ({ countries, selectedType, onCountryChange }) => {
  const classes = useStyle();

  return (
    <>
      {countries.map(ctr => (
        <Circle
          onclick={() => onCountryChange(ctr.name)}
          key={ctr.name}
          center={[ctr.lat, ctr.long]}
          fillOpacity={0.4}
          color={casesTypeColors[selectedType].hex}
          fillColor={casesTypeColors[selectedType].hex}
          radius={
            Math.sqrt(ctr[selectedType]) *
            casesTypeColors[selectedType].multiplier
          }
        >
          <Popup>
            <div className={classes.popup}>
              <div
                className={classes.flag}
                style={{ backgroundImage: `url(${ctr.flag})` }}
              />
              <div className={classes.name}>{ctr.name}</div>
              <div className={`${classes.data} ${classes.infected}`}>
                Infected: {numeral(ctr.cases).format('0, 0')}
              </div>
              <div className={`${classes.data} ${classes.recovered}`}>
                Recovered: {numeral(ctr.recovered).format('0, 0')}
              </div>
              <div className={`${classes.data} ${classes.deaths}`}>
                Deaths: {numeral(ctr.deaths).format('0, 0')}
              </div>
            </div>
          </Popup>
        </Circle>
      ))}
    </>
  );
};

export default MapCircles;
