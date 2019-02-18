import sc from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Pagination = sc.div`

`;

export const PaginationList = sc.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
  
export const PaginationItem = sc.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const PaginationLink = sc(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  border-radius: 50%;
  background: #aaa;
  color: #e1e1e1;
  text-decoration: none;

  &.active {
    border: 2px solid #aa0000;
    color: #aa0000;
  }
`;