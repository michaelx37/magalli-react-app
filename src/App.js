import React from "react";
import Router from './routes/Router'
import { ThemeProvider } from '@material-ui/core'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
