import sc from 'styled-components';

export const Container = sc.div`
  width: 100%;
  border: 1px solid #e1e1e1;
`;

export const Title = sc.h1`

`;

export const Table = sc.table`
  width: 100%;
  background: #f1f1f1;
`;

export const Th = sc.th`
  padding: 20px 0;
  background: #ddd;
`;

export const Tr = sc.tr`
  width: 100%;
  border: 1px solid #e1e1e1;

  &:nth-child(2n + 1) {
    background: #fff;
  }
`;