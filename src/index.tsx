import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme';
import { GlobalStyles } from './core/globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider >
);

