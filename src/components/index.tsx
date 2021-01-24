import * as React from 'react';

export { default as AsyncComponent } from './AsyncComponent';
export { default as ErrorProtector } from './ErrorProtector';
export { default as ExternalComponent } from './ExternalComponent';
export { default as ExternalModule } from './ExternalModule';
export { default as Router } from './Router';

const EnvComponentContext = React.createContext<{[propname: string]: any}>({});
EnvComponentContext.displayName = 'EnvComponentContext';

export type Context = {
  req?: Request,
  res?: Response,
  store: any;
}


export default EnvComponentContext;
