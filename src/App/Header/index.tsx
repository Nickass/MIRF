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
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/translator/1">one</Link>
          </li>
          <li>
            <Link to="/translator/2">two</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;