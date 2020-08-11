// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';

import * as middlewares from './middlewares';
export { middlewares };

interface SettingsProps extends RouteComponentProps {
  className?: string;
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

export default Settings;