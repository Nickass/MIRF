import sc from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Container = sc.nav`
  padding: 10px;
  background: #c8e3fe;
  color: #222;
`;

export const NavList = sc.ul`
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
  text-align: left;
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
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;

  &.active,
  &:hover {
    font-weight: 600;
    border-bottom: 2px solid currentColor;
  }
  &.active {
    color: black;
  }
`;
