// modules
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';

// assets
import { Container, Title } from './assets/styles';

interface ProfileProps extends RouteComponentProps {
  className?: string;
};

class Profile extends React.Component<ProfileProps> {
  render () {
    console.log('profile', this.props)
    return (
      <Container>
        <Title>Profile page</Title>
        {this.props.children}
      </Container>
    );
  }
}

export default Profile;