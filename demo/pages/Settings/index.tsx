// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// system
import { Router } from 'mirf';

// assets
import { Container, Title } from './assets/styles';

// module
import * as config from './config.json';
export { config };

interface SettingsProps extends RouteComponentProps {
  className?: string;
};

class Settings extends React.Component<SettingsProps> {
  render () {
    return (
      <Container className={this.props.className}>
        <Title>Settings page</Title>
        {this.props.children}
        <Router routes={config.routes} base={`http://localhost:${process.env.NODE_ENV==='development' ? '8080' : '3000'}`} />
      </Container>
    );
  }
}

export default Settings;
