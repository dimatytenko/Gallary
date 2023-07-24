import React from 'react';
import {ThemeProvider} from 'styled-components';

import 'modern-normalize';

import {defaultTheme} from './ui-kit/theme/theme';
import {Layout} from './containers/Layout';
import {GlobalStyles} from './styles/index';
import RoutesSwitch from './Routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Layout>
        <RoutesSwitch />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
