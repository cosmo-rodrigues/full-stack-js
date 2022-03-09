import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './AppRoutes';

import { theme } from './styles/theme';

import { history } from './helpers/history';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <HistoryRouter history={history}>
        <AppRoutes />
      </HistoryRouter>
    </ThemeProvider>
  );
}

export default App;
