import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  success: {
    color: theme.palette.success.main,
  },
  error: {
    color: theme.palette.error.main,
  },
  warning: {
    color: theme.palette.warning.main,
  },
}));

export default useStyle;
