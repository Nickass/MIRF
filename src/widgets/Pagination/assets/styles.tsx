import styled from 'styled-components';
import * as rrd from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  align-self: stretch;
  flex: 1 1 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
`;
  
export const Item = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Link = styled(rrd.NavLink)<{size?: number}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({size = 40}) => size }px;
  height: ${({size = 40}) => size }px;
  padding: 3px;
  margin: 0 5px;
  border-radius: 50%;
  background: #aaa;
  color: #e1e1e1;
  text-decoration: none;
  font-size: 12px;

  &.active {
    border: 2px solid #aa0000;
    color: #aa0000;
  }
`;

export const Empty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  background: #ddd;
  color: gray;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 0 5px;
  font-size: 12px;
`;

export const Arrow = styled(rrd.Link)`
  display: flex;
  text-decoration: none;
  flex: 1 1 auto;
  border: 1px solid gray;
  padding: 10px 20px;

  &:last-child {
    justify-content: flex-end;
  }
`;