import React from 'react';
import {ThemeProvider} from 'styled-components';

import 'modern-normalize';

import {defaultTheme} from './ui-kit/theme/theme';
import {Layout} from './containers/Layout';
import {GlobalStyles} from './styles/index';
import RoutesSwitch from './Routes';
import RecoilProvider from './containers/RecoilProvider';
import CurrentUser from './containers/CurrentUser';

function App() {
  return (
    <RecoilProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <CurrentUser>
          <Layout>
            <RoutesSwitch />
          </Layout>
        </CurrentUser>
      </ThemeProvider>
    </RecoilProvider>
  );
}

export default App;
