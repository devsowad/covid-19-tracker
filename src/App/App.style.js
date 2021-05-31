import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  container: {
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 5,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    [theme.breakpoints.down('xs')]: {
      width: 120,
    },
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
    '& img': {
      width: '100%',
    },
  },
  countryName: {
    textTransform: 'capitalize',
  },
}));

export default useStyle;
