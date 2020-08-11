// modules
import * as React from 'react';
import sc, { css } from 'styled-components';

// assets
import './assets/base.scss';
import './assets/atomic.scss';

// custom
import NakedHeader from './Header';
import NakedFooter from './Footer';

import * as middlewares from './middlewares';
export { middlewares };

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
// const Pages = sc(NakedPages)`
//   flex: 1 1 auto;
//   width: 100%;
//   max-width: 900px;
//   margin: auto;
// `;

type AppProps = {
  config: any;
};
type State = {

};

export async function init(props: any): Promise<AppProps> {
  console.log('itntial App data')

  return ({} as any);
}

class App extends React.Component<AppProps, State> {
  render () {
    const { children, config } = this.props;
    return (
      <Container>
        <Header config={config} />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default App;