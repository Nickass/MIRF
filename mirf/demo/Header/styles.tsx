import sc from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Header = sc.header`

`;

export const Logo = sc(Link)`
  display: block;
  max-width: 400px;
  margin: 0 auto 1em;
  font-size: 34px;
  color: #540101;
  text-decoration: none;
  font-family: "Arial";
  border-radius: 8px;
  background: rgba(0,0,0,0.05);
  padding: 20px 10px;
  border: 1px solid #BBB;
`;

export const Nav = sc.nav`
  font-family: "Arial";
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