// modules
import * as React from 'react';

// assets
import { Container, Title } from './assets/styles';

interface WordsProps {
  className?: string;
  dispatch: any;
};

export default class Words extends React.Component<WordsProps> {
  render () {
    return (
      <Container className={this.props.className}>
        <Title>Words page</Title>
        {this.props.children}
      </Container>
    );
  }
}
