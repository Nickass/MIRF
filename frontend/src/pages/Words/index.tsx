// modules
import * as React from 'react';
import ExternalComponent from '@mira/ExternalComponent'
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';

interface WordsProps extends RouteComponentProps {
  className?: string;
  dispatch: any;
};

export default class Words extends React.Component<WordsProps> {
  render () {
    return (
      <Container>
        <Title>Words page</Title>
        {this.props.children}
      </Container>
    );
  }
}