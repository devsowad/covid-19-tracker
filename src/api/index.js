import axios from 'axios';

axios.defaults.baseURL = 'https://disease.sh/v3/covid-19/';

export const fetchCountries = async () => {
  const { data } = await axios.get('/countries');

  const modifiedData = data.map(
    ({
      country,
      cases,
      deaths,
      recovered,
      countryInfo: { long, lat, flag },
    }) => ({
      name: country,
      value: country,
      cases,
      flag,
      deaths,
      recovered,
      long,
      lat,
    })
  );
  return modifiedData;
};

export const fetchCountryInfo = async country => {
  const url = country === 'worldwide' ? '/all' : `/countries/${country}`;
  const {
    data: { todayCases, todayDeaths, todayRecovered, cases, recovered, deaths },
  } = await axios.get(url);

  return { todayCases, todayDeaths, todayRecovered, cases, recovered, deaths };
};

export const fetchHistory = async country => {
  const url =
    country === 'worldwide'
      ? '/historical/all?lastdays=30'
      : `/historical/${country}?lastdays=30`;

  try {
    const { data } = await axios.get(url);

    return country === 'worldwide' ? data : data?.timeline;
  } catch (error) {
    console.log(error);
  }
};
