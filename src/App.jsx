import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import {ThemeProvider} from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import RestaurantScreen from './components/RestaurantScreen';

const theme = createMuiTheme({
  palette: {
    primary: orange,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">Opinion Ate</Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <RestaurantScreen />
      </Container>
    </ThemeProvider>
  );
};

export default App;
