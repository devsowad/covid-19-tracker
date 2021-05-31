import {
  Card,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import useStyle from './Countries.style';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import numeral from 'numeral';

const tableHeaders = [
  { id: 'name', label: 'Countries' },
  { id: 'cases', label: 'Infected', align: 'right' },
  { id: 'recovered', label: 'Recovered', align: 'right' },
  { id: 'deaths', label: 'Deaths', align: 'right' },
];

const Countries = props => {
  const {
    onCountryChange,
    country: selectedCountry,
    countries,
    selectedType,
  } = props;

  const classes = useStyle();
  const [orderBy, setOrderBy] = useState(selectedType);
  const [order, setOrder] = React.useState('asc');

  useEffect(() => {
    setOrderBy(selectedType);
  }, [selectedType]);

  const createSortHandler = property => event => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function stableSort(array) {
    array.sort((a, b) => {
      return a[orderBy] > b[orderBy]
        ? order === 'asc'
          ? -1
          : 1
        : order === 'asc'
        ? 1
        : -1;
    });
    return array;
  }

  return (
    <Grid item xs={12}>
      <Card elevation={4}>
        <PerfectScrollbar
          className={`MuiPaper-root MuiTableContainer-root ${classes.tableContainer} MuiPaper-elevation1 MuiPaper-rounded`}
        >
          <Table stickyHeader size="small">
            <TableHead>
              <TableRow>
                {tableHeaders.map(th => (
                  <TableCell key={th.id} align={th.align ?? 'left'}>
                    <TableSortLabel
                      active={orderBy === th.id}
                      direction={orderBy === th.id ? order : 'asc'}
                      onClick={createSortHandler(th.id)}
                    >
                      {th.label}
                    </TableSortLabel>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(countries).map(country => (
                <TableRow
                  onClick={() => onCountryChange(country.name)}
                  className={
                    selectedCountry === country.name ? `${classes.active}` : ''
                  }
                  key={country.name}
                >
                  <TableCell component="th" scope="row">
                    {country.name}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    {numeral(country.cases).format('0,0')}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    {numeral(country.recovered).format('0,0')}
                  </TableCell>
                  <TableCell align="right" component="th" scope="row">
                    {numeral(country.deaths).format('0,0')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
      </Card>
    </Grid>
  );
};

export default Countries;
