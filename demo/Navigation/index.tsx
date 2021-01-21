// modules
import * as React from 'react';

// system
import { ErrorProtector } from 'mirf';
// custom

// assets
import {
  Container,
  NavList,
  NavItem,
  NavLink
} from './styles';

interface HeaderProps {
  className?: string;
}

const Header: React.FunctionComponent<HeaderProps> = props => {
  const { className } = props;

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
    <Container className={className}>
      <NavList>
        {nav.map(item => (
          <NavItem key={item.id + item.name}>
            <NavLink to={item.path} exact>
              {item.name || item.id}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </Container>
  );
};

export default Header;
