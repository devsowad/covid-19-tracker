import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  popup: {
    width: 150,
    fontFamily: theme.typography.fontFamily,
  },
  flag: {
    height: 80,
    width: '100%',
    backgroundSize: 'cover',
    borderRadius: 8,
  },
  data: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: theme.typography.fontWeightMedium,
  },
  name: {
    fontSize: 20,
    color: '#555',
    marginTop: 5,
  },
  infected: {
    color: theme.palette.warning.main,
  },
  recovered: {
    color: theme.palette.success.main,
  },
  deaths: {
    color: theme.palette.error.main,
  },
}));

export default useStyle;
