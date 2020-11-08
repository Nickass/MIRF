// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// system
// import Router from '~/system/components/Router';

// assets
import { Container, Title } from './assets/styles';

// module
import * as config from './config.json';
import * as middlewares from './middlewares';
export { config, middlewares };

interface SettingsProps extends RouteComponentProps {
  className?: string;
};

class Settings extends React.Component<SettingsProps> {
  render () {
    return (
      <Container className={this.props.className}>
        <Title>Settings page</Title>
        {this.props.children}
        {/* <Router routes={config.routes} /> */}
      </Container>
    );
  }
}

export default Settings;