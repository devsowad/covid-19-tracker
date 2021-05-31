import { Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyle from './App.style';
import CountryDropdown from '../CountryDropdown/CountryDropdown';
import InfoBoxes from '../InfoBoxes/InfoBoxes';
import Map from '../Map/Map';
import Countries from '../Countries/Countries';
import { fetchCountries } from '../api';
import LineGraph from '../LineGraph/LineGraph';
import image from '../images/image.png';

const defaultCoordinate = { lat: 34.80746, lng: -40.4796 };
const defaultZoomLabel = 3;

const App = () => {
  const classes = useStyle();
  const [country, setCountry] = useState('worldwide');
  const [countries, setCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState(defaultCoordinate);
  const [mapZoom, setMapZoom] = useState(defaultZoomLabel);
  const [selectedType, setSelectedType] = useState('cases');

  const onChangeSelectedType = type => setSelectedType(type);

  const onCountryChange = country => {
    if (country === 'worldwide') {
      setMapCenter(defaultCoordinate);
      setMapZoom(defaultZoomLabel);
      setCountry('worldwide');
    } else {
      const { name, lat, long: lng } = countries.find(
        el => el.name === country
      );
      setMapCenter({ lat, lng });
      setMapZoom(4);
      setCountry(name);
    }
  };

  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
    };
    getCountries();
  }, []);

  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} xl={6}>
          <div className={classes.header}>
            <div className={classes.logoContainer}>
              <img src={image} alt="COVID-19" />
            </div>
            <CountryDropdown
              countries={countries}
              onCountryChange={onCountryChange}
              country={country}
            />
          </div>
          <Typography
            className={classes.countryName}
            gutterBottom
            variant="h6"
            component="h1"
          >
            {country}
          </Typography>

          <InfoBoxes
            selectedType={selectedType}
            onChangeSelectedType={onChangeSelectedType}
            country={country}
          />

          <Map
            onCountryChange={onCountryChange}
            selectedType={selectedType}
            countries={countries}
            zoom={mapZoom}
            center={mapCenter}
          />
        </Grid>

        <Grid item xs={12} sm={12} md={4} xl={6}>
          <Grid container spacing={2}>
            {/* Line Graph */}
            <LineGraph country={country} />

            {/* Country Table */}
            <Countries
              selectedType={selectedType}
              country={country}
              onCountryChange={onCountryChange}
              countries={countries}
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
