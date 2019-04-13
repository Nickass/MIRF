// modules
import * as React from 'react';
import { Helmet } from "react-helmet";
import { RouteComponentProps } from 'react-router';

// custom

// assets

interface HomeProps extends RouteComponentProps {
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