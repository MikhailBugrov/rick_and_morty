import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/configureStore';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Box, ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

//I am using HashRouter instead of BrowserRouter due to the peculiarities of GitHub Pages hosting.

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <BrowserRouter> */}
      <HashRouter> 
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </Box>
      </HashRouter>
      {/* </BrowserRouter> */}
    </Provider>
  </React.StrictMode>
);
