// modules
import * as React from 'react';
import * as cn from 'classnames';

// custom

// assets
import './assets/styles.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className?: any;
};

class Header extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;

    return (
      <header className={cn(className, 'Header')}>
        <h1>Hi! I am main header!</h1>
        <Link to="/translator/1">go to translator</Link>
      </header>
    )
  }
}

export default Header;