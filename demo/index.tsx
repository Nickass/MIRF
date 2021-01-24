// modules
import * as React from 'react';
import sc, { createGlobalStyle } from 'styled-components';
import { Router } from 'mirf';

// assets
import './assets/base.scss';
import './assets/atomic.scss';

// custom
import NakedHeader from './Header';
import NakedNavigation from './Navigation';

// module
import * as config from './config.json';

export { config };

// assets
const GlobalStyle = createGlobalStyle`
  body { font-family: "Arial"; }
  img { max-width: 100%; }
  * { box-sizing: border-box; }
`;
const Container = sc.div`
  display: grid;
  height: 100vh;
  grid-template:
    "header header"
    "navigation main";
  grid-template-rows: min-content auto;
  grid-template-columns: minmax(260px, 600px) minmax(75%, auto);
  text-align: center;
  overflow: hidden;
}
`;
const Header = sc(NakedHeader)`
  grid-area: header;
  overflow: auto;
`;
const Navigation = sc(NakedNavigation)`
  grid-area: navigation;
  overflow: auto;
`;
const Pages = sc(Router)`
  grid-area: main;
  height: 100%;
  width: 100%;
  margin: auto;
  overflow: auto;
`;

type AppProps = {
  className?: string;
};

export async function init(props: AppProps): Promise<AppProps> {
  return props;
}

const App: React.FunctionComponent<AppProps> = props => {
  const { className, children } = props;

  return (
    <Container className={className}>
      <GlobalStyle />
      <Header />
      <Navigation />
      <Pages routes={config.routes} base={process.env.SERVER_URL} timeout={5000}>
        Hello! I'm children of the root
        {children}
      </Pages>
    </Container>
  );
};

export default App;
