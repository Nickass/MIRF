// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import sc from 'styled-components';

export const Container = sc.div`
  width: 100%;
  border: 1px solid #e1e1e1;
`;

export const Title = sc.h1`
  font-size: 36px;
`;

interface SubpageProps extends RouteComponentProps {
  className?: string;
};

export async function init(props: any): Promise<SubpageProps> {
  return props;
}

class Subpage extends React.Component<SubpageProps> {
  render () {
    const { className } = this.props;

    return (
      <Container className={className}>
        <Title>Subpage component</Title>
        {this.props.children}
      </Container>
    );
  }
}

export default Subpage;