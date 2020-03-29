// modules
import * as React from 'react';

// system
import { getPathByRouteID } from '~/pages/routes';

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

const homeTo = getPathByRouteID('home');
const nav = [
  {
    path: getPathByRouteID('words', { id: '1' }),
    name: 'Words',
  },
  {
    path: getPathByRouteID('settings'),
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
        <Logo to={homeTo}>
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