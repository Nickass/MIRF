// modules
import * as React from 'react';
import { Helmet } from "react-helmet";

// custom

// assets

interface HomeProps {
  className?: string;
};

class Home extends React.Component<HomeProps> {
  render () {
    const { className } = this.props;
    return (
      <div className={className}>
        <Helmet>
          <title>Home</title>
        </Helmet>
        Hi and welocome to home!
      </div>
    )
  }
}

export default Home;