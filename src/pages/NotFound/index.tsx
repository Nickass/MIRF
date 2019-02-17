// modules
import * as React from 'react';

// custom

// assets
import './assets/styles.scss';

interface NotFoundProps {

};

class NotFound extends React.Component<NotFoundProps> {
  render () {
    return (
      <div className="NotFound">
        <strong className="NotFound__code">404</strong>
        <h1 className="NotFound__titl">Sorry page not found</h1>
      </div>
    )
  }
}

export default NotFound;