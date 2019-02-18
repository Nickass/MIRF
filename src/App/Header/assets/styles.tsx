import sc from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Header = sc.header`

`;

export const Logo = sc(Link)`
  display: block;
  max-width: 400px;
  margin: 0 auto 1em;
  font-size: 48px;
  color: brown;
  text-decoration: none;
`;

export const Nav = sc.nav`

`;

export const NavList = sc.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: center;
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
  border-bottom: 2px solid rgba(pink, .6);
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