import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  map: {
    [theme.breakpoints.down('sm')]: {
      height: '350px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '400px',
    },
    [theme.breakpoints.up('md')]: {
      height: '515px',
    },
    '& .leaflet-container': {
      height: '100%',
    },
  },
}));

export default useStyle;
