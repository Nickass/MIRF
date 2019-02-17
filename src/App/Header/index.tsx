// modules
import * as React from 'react';
import * as cn from 'classnames';
import { NavLink as Link } from 'react-router-dom';

// system
import book from 'system/book';

// custom

// assets
import './assets/styles.scss';

const nav = [
  {
    to: book.words.root(''),
    name: 'Words'
  },
  {
    to: book.settings.root(),
    name: 'Settings'
  }
]

interface HeaderProps {
  className?: any;
};

class Header extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;

    return (
      <header className={cn(className, 'Header')}>
        <Link className="Header__logo" to={book.home.root()}>
          Hi! Welcome to english cards!
        </Link>
        <nav className="Header__nav">
          <ul className="Header__nav-list">
            {nav.map(item => (
              <li className="Header__nav-item" key={item.name}>
                <Link
                  className="Header__nav-link"
                  activeClassName="Header__nav-link--active"
                  to={item.to}
                  exact={true}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;