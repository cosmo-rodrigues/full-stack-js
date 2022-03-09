import { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './AppRoutes';

import { theme } from './styles/theme';

import { history } from './helpers/history';
class App extends Component {
  render() {
    return (
      <HistoryRouter history={history}>
        <ThemeProvider theme={theme}>
          <Router>
            <Routes>
              <AppRoutes />
            </Routes>
          </Router>
        </ThemeProvider>
      </HistoryRouter>
    );
  }
}

export default App;
