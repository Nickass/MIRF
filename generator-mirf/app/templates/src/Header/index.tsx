import * as React from 'react';
import sc from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import ErrorProtector from '#external/ErrorProtector';


export const Container = sc.header`
  border-bottom: 2px solid #eaeaea;
  margin-bottom: 20px;
`;

export const NavList = sc.ul`
  display: inline-flex;
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
`;

export const NavItem = sc.li`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-right: 10px;
`;

export const NavLink = sc(Link)`
  display: block;    
  color: inherit;
  padding: 10px 20px;
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: 400ms;
  font-weight: 600;
  font-size: 14px;
  color: #a11;
  text-transform: uppercase;

  &.active,
  &:hover {
    border-bottom: 2px solid red;
  }
  &.active {
    color: black;
  }
`;

interface HeaderProps {
  className?: any;
};

export default class Header extends React.Component<HeaderProps> {
  render () {
    const { className } = this.props;
    const nav = [
      {
        id: 'home',
        name: 'Home',
        path: '/'
      },
      {
        id: 'sub',
        name: 'Subpage',
        path: '/subpage'
      },
    ];

    return (
        <Container className={className}>
          <NavList>
            {nav.map(item => (
              <NavItem key={item.id + item.name}>
                <NavLink to={item.path} exact={true}>
                  {item.name || item.id}
                </NavLink>
              </NavItem>
            ))}
          </NavList>
        </Container>
    )
  }
}