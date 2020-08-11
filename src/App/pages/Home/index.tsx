// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';
import './assets/base.scss';

interface HomeProps extends RouteComponentProps {
  className?: string;
  dispatch: any;
};

export async function init(props: any): Promise<HomeProps> {
  console.log('home init data')

  return ({} as any);
}

class Home extends React.Component<HomeProps> {
  render () {
    return (
      <Container>
        <Title>Home page</Title>
        {this.props.children}
      </Container>
    );
  }
}

export default Home;