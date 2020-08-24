// modules
import * as React from 'react';
import * as cn from 'classnames';

// custom

// assets
import './assets/styles.scss';

interface FooterProps {
  className?: any;
};

class Footer extends React.Component<FooterProps> {
  render () {
    const { className } = this.props;

    return (
      <footer className={cn(className, 'Footer')}>
        <p>Created by Nikolay Nazarishin. 2019</p>
      </footer>
    )
  }
}

export default Footer;