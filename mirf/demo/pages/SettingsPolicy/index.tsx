// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';

interface SettingsPolicyProps extends RouteComponentProps {
  className?: string;
  dispatch: any;
};

class SettingsPolicy extends React.Component<SettingsPolicyProps> {
  render () {
    throw new Error('SettingsPolicy err')
    return (
      <Container>
        <Title>SettingsPolicy page</Title>
        {this.props.children}
      </Container>
    );
  }
}

export default connect()(SettingsPolicy);