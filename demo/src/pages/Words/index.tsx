// modules
import * as React from 'react';
import ExternalComponent from '#external/ExternalComponent'

// assets
import { Container, Title } from './assets/styles';

interface WordsProps {
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