import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { fetchCountryInfo } from '../api';
import InfoBox from './InfoBox';
import useStyle from './InfoBox.style';

const InfoBoxes = ({ country, selectedType, onChangeSelectedType }) => {
  const classes = useStyle();
  const [data, setData] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      setData(await fetchCountryInfo(country));
    };
    getInfo();
  }, [country]);

  return (
    <Grid container style={{ marginBottom: 10 }} spacing={2}>
      <InfoBox
        selected={selectedType === 'cases'}
        onClick={() => onChangeSelectedType('cases')}
        title="Infected"
        today={data.todayCases}
        total={data.cases}
        color={classes.warning}
      />
      <InfoBox
        selected={selectedType === 'recovered'}
        onClick={() => onChangeSelectedType('recovered')}
        title="Recovered"
        today={data.todayRecovered}
        total={data.recovered}
        color={classes.success}
      />
      <InfoBox
        selected={selectedType === 'deaths'}
        onClick={() => onChangeSelectedType('deaths')}
        title="Deaths"
        today={data.todayDeaths}
        total={data.deaths}
        color={classes.error}
      />
    </Grid>
  );
};

export default InfoBoxes;
