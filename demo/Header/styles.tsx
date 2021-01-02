import sc from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const ThemeBtn = sc.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  padding: 4px;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 200ms;

  &.light {
    background: black;
    color: yellow;

    &:hover {
      background: yellow;
      color: black;
    }
    &:focus { outline-color: yellow }
    &:after { content: '☀' }
  }

  &.dark {
    background: yellow;
    color: black;

    &:hover {
      background: black;
      color: yellow;
    }
    &:focus { outline-color: black }
    &:after { content: '🌙' }
  }
`;

export const LogoLink = sc(Link)`
  display: block;
  height: 100%;
  margin-right: 20px;
  font-size: 14px;
  color: #540101;
  text-decoration: none;
  border-radius: 8px;
  background: rgba(0,0,0,0.05);
  padding: 4px;
  border: 1px solid white;

  > img { max-height: 100%; max-width: none; }
`;

export const Title = sc.h1`
  margin: 0;
  font-size: 24px;
  font-family: monospace;
  text-transform: capitalize;
`;

export const Container = sc.header`
  display: flex;
  height: 60px;
  padding: 10px;
  border-bottom: 2px solid #b088f9;
  align-items: center;
  background: #bedcfa;

  > .${ThemeBtn.styledComponentId} {
    margin-left: auto;
  }
`;
