// modules
import * as React from 'react';
import { Helmet } from "react-helmet";
import { RouteComponentProps } from 'react-router';

// custom


interface SettingsProps extends RouteComponentProps {
  className?: string;
};

class Settings extends React.Component<SettingsProps> {
  render () {
    const { className } = this.props;

    return (
      <div className={className}>
        <Helmet>
          <title>Settings</title>
        </Helmet>
        You are at settings page
      </div>
    )
  }
}

export default Settings;