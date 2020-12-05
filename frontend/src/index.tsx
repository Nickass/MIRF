// modules
import * as React from 'react';
import sc, { css } from 'styled-components';
import Router from '#external/ExternalRouter';

// assets
// import './assets/base.scss';
// import './assets/atomic.scss';

// custom
import NakedHeader from './Header';
import NakedFooter from './Footer';

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
const Footer = sc(NakedFooter)`
  margin-top: auto;
  padding: 20px 0;
  background: #3a3a3a;
  color: #fff;
`;
const Pages = sc(Router)`
  flex: 1 1 auto;
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

type AppProps = {
};
type State = {

};

export async function init(props: any): Promise<AppProps> {
  return props;
}

class App extends React.Component<AppProps, State> {
  render () {
    const { children } = this.props;
    return (
      <Container>
        <Header />
        Hello I'm a Page! 
        <Pages routes={config.routes} base={`http://localhost:${process.env.NODE_ENV==='development' ? '8080' : '3000'}`} timeout={5000}>
          Hello! I'm children of the root
        </Pages>
        <Footer />
      </Container>
    )
  }
}

export default App;