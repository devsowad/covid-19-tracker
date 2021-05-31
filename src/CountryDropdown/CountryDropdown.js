import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const CountryDropdown = ({ countries, country, onCountryChange }) => {
  return (
    <FormControl variant="filled">
      <InputLabel>Country</InputLabel>
      <Select
        style={{ minWidth: 120, maxWidth: 150 }}
        value={country}
        onChange={e => onCountryChange(e.target.value)}
      >
        <MenuItem value="worldwide">Worldwide</MenuItem>
        {countries &&
          countries.map(country => (
            <MenuItem key={country.name} value={country.value}>
              {country.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CountryDropdown;
