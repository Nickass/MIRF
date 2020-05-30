// modules
import * as React from 'react';

// system

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
    path: '/words',
    name: 'Words',
  },
  {
    path: '/settings',
    name: 'Settings',
  },
]

interface HeaderProps {
  className?: any;
};

export default class extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;

    return (
      <Header className={className}>
        <Logo to={'/'}>
          Hi! Welcome to english cards!
        </Logo>
        <Nav>
          <NavList>
            {nav.map(item => (
              <NavItem key={item.name}>
                <NavLink to={item.path} >
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