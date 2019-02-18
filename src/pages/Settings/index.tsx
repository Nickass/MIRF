// modules
import * as React from 'react';

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
        You are at settings page
      </div>
    )
  }
}

export default Settings;