// modules
import * as React from 'react';

// system
// import ErrorProtector from '~/system/components/ErrorProtector';

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

interface HeaderProps {
  className?: any;
};

function pullNav(config: any): any[] {
  const { routes = [] } = config as { routes: any[] };
  return [ config, ...routes.reduce((acc, curr) => ([ ...acc, ...pullNav(curr) ]), []) ]
}

export default class extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;
    const nav = [
      {
        id: 'home',
        name: 'Home',
        path: '/'
      },
      {
        id: 'settings-policy',
        name: 'Settings Policy',
        path: '/settings/policy',
      },
      {
        id: 'settings',
        name: 'Settings',
        path: '/settings'
      },
      {
        id: 'profile',
        name: 'Profile',
        path: '/settings/profile'
      },
      {
        id: 'words',
        name: 'Words',
        path: '/words'
      }
    ];

    return (
        <Header className={className}>
          <Logo to={'/'}>
            Hi! Welcome to english cards!
          </Logo>
          <Nav>
            <NavList>
              {nav.map(item => (
                <NavItem key={item.id + item.name}>
                  <NavLink to={item.path} exact={true}>
                    {item.name || item.id}
                  </NavLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>
        </Header>
    )
  }
}