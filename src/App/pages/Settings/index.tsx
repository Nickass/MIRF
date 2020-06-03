// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';

interface SettingsProps extends RouteComponentProps {
  className?: string;
  dispatch: any;
};

class Settings extends React.Component<SettingsProps> {
  render () {
    return (
      <Container>
        <Title>Settings page</Title>
        {this.props.children}
      </Container>
    );
  }
}

export default connect()(Settings);