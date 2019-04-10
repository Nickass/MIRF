// modules
import * as React from 'react';

// system
import book from 'system/book';

// custom

// assets
import {
  Header,
  Logo,
  Nav,
  NavList,
  NavItem,
  NavLink
} from './assets/styles';

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

export default class extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;

    return (
      <Header className={className}>
        <Logo to={book.home.root()}>
          Hi! Welcome to english cards!1vv
        </Logo>
        <Nav>
          <NavList>
            {nav.map(item => (
              <NavItem key={item.name}>
                <NavLink to={item.to} >
                  {item.name}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Nav>
      </Header>
    )
  }
}