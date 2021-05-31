import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import {
  createMuiTheme,
  CssBaseline,
  responsiveFontSizes,
  ThemeProvider,
} from '@material-ui/core';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins'].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': ['Poppins'],
      },
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={responsiveFontSizes(theme)}>
    <App />
    <CssBaseline />
  </ThemeProvider>,
  document.getElementById('root')
);
