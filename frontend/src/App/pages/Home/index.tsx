// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';
import './assets/base.scss';

interface HomeProps extends RouteComponentProps {
  className?: string;
};

export async function init(props: any): Promise<HomeProps> {
  return props;
}

class Home extends React.Component<HomeProps> {
  render () {
    const { className } = this.props;

    return (
      <Container className={className}>
        <Title>Home page</Title>
        {this.props.children}
      </Container>
    );
  }
}

export default Home;