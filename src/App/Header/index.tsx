// modules
import * as React from 'react';
import * as cn from 'classnames';

// custom

// assets
import './assets/styles.scss';

interface HeaderProps {
  className?: any;
};

class Header extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;

    return (
      <header className={cn(className, 'Header')}>
        <h1>Hi! I am main header!</h1>
      </header>
    )
  }
}

export default Header;