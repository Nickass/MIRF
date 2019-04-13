// modules
import * as React from 'react';
import { Helmet } from "react-helmet";
import { RouteComponentProps } from 'react-router';

// custom


interface NotFoundProps extends RouteComponentProps {
  className?: string;
};

class NotFound extends React.Component<NotFoundProps> {
  render () {

    const { className } = this.props;
    return (
      <div className={className}>
        <Helmet>
          <title>404 - not found</title>
        </Helmet>
        <strong className="NotFound__code">404</strong>
        <h1 className="NotFound__titl">Sorry page not found</h1>
      </div>
    )
  }
}

export default NotFound;