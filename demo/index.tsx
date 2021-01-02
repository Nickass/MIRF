// modules
import * as React from 'react';
import sc from 'styled-components';
import Router from '#external/ExternalRouter';

// assets
import './assets/base.scss';
import './assets/atomic.scss';

// custom
import NakedHeader from './Header';

// module
import * as config from './config.json';
import * as middlewares from './middlewares';

export { config, middlewares };

// assets
const Container = sc.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
`;
const Header = sc(NakedHeader)`
  padding: 50px 0;
  background: #eaeaea;
`;
const Pages = sc(Router)`
  flex: 1 1 auto;
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

type AppProps = {
};

export async function init(props: AppProps): Promise<AppProps> {
  return props;
}

const App: React.FunctionComponent<AppProps> = props => {
  const { children } = props;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Container>
      <Header />
      Hello I'm a Page!
      <br />
      {!isOpen ? (
        <button type="button" onClick={() => setIsOpen(true)}>Open routes</button>
      ) : (
        <Pages routes={config.routes} base={process.env.SERVER_URL} timeout={5000}>
          Hello! I'm children of the root
          {children}
        </Pages>
      )}
    </Container>
  );
};

export default App;
