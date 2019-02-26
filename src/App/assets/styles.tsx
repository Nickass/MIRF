import sc, { css } from 'styled-components';
import header from '../Header';
import footer from '../Footer';
import * as React from 'react'

export const Container = sc.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  text-align: center;
`;

export const Header = sc(header)`
  padding: 50px 0;
  background: #eaeaea;
`;

export const centerStyle = css`
  width: 100%;
  max-width: 900px;
  margin: auto;
`;

export const Footer = sc(footer)`
  margin-top: auto;
  padding: 20px 0;
  background: #3a3a3a;
  color: #fff;
`;