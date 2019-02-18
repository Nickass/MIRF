// modules
import * as React from 'react';

// custom

// assets
import './assets/styles.scss';

interface HomeProps {
  className?: string;
};

class Home extends React.Component<HomeProps> {
  render () {
    const { className } = this.props;
    return (
      <div className={className}>
        Hi and welocome to home!
      </div>
    )
  }
}

export default Home;