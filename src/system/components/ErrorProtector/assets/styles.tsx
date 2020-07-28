import sc from 'styled-components';

export const Error = sc.div`
  padding: 5px 15px;
  border: 2px solid white;
  color: #ffe6e6;
  background: black;
  font-size: 14px;
  text-align: left;
  font-family: monospace;
`;

export const ErrorTitle = sc.h1`
  color: red;
  margin-bottom: 0;
`;

export const ErrorSubtitle = sc.p`
  margin-top: 0.25em;
  margin-bottom: 1.25em;
  font-size: 1.2em;
`;

export const ErrorList = sc.ol`
  overflow: auto;
  max-height: 300px;
  padding-left: 0;
  list-style-position: inside;
`;