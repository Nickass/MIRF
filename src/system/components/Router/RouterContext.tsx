import * as React from 'react';

export type RouterContextValue = {
  full_id: string;
  full_path: string;
  full_dir: string;
  middlewares: object;
}

const RouterContext = React.createContext<RouterContextValue>({ full_id: '', full_path: '', full_dir: '', middlewares: {} });
RouterContext.displayName = 'RouterContext';

export const { Consumer, Provider } = RouterContext;
export default RouterContext;