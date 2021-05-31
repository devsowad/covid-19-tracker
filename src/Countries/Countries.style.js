import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  tableContainer: {
    maxHeight: '384px',
    '& tr': {
      cursor: 'pointer',
    },
  },
  active: {
    backgroundColor: theme.palette.primary.dark,
    '& th': {
      color: '#fff',
    },
  },
}));

export default useStyle;
