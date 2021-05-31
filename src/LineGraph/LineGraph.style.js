import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  container: {
    '& canvas': {
      height: '308px !important',
    },
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    textTransform: 'capitalize',
    marginTop: 10,
  },
}));

export default useStyle;
