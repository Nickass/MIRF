// modules
import * as React from 'react';
import { Helmet } from "react-helmet";
import sc, { css } from 'styled-components';

// custom
import NakedHeader from './Header';
import NakedFooter from './Footer';
import NakedPages from 'pages';
import ErrorBoundary from 'widgets/ErrorBoundary';

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
const Pages = sc(NakedPages)`
  flex: 1 1 auto;
  width: 100%;
  max-width: 900px;
  margin: auto;
`;
const Footer = sc(NakedFooter)`
  margin-top: auto;
  padding: 20px 0;
  background: #3a3a3a;
  color: #fff;
`;

type AppProps = {
  
};
type State = {

};

class App extends React.Component<AppProps, State> {
  render () {
    return (
      <Container>
        <Helmet titleTemplate="English cards | %s">
          <html lang="en" />
          <title>Hello!</title>
        </Helmet>
        <Header />
        <ErrorBoundary>
          <Pages />
        </ErrorBoundary>
        <Footer />
      </Container>
    )
  }
}

export default App;