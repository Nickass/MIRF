// modules
import * as React from 'react';
import { Helmet } from "react-helmet";

// custom

// assets
import './assets/styles.scss';

interface SettingsProps {
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