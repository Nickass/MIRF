import * as React from 'react';

export { default as AsyncComponent } from './AsyncComponent';
export { default as ErrorProtector } from './ErrorProtector';
export { default as ExternalComponent } from './ExternalComponent';
export { default as ExternalModule } from './ExternalModule';
export { default as Router } from './Router';

const EnvComponentContext = React.createContext<{[propname: string]: any}>({});
EnvComponentContext.displayName = 'EnvComponentContext';

export type asyncIdentity<T = unknown> = (a: T) => Promise<T>; // eslint-disable-line no-unused-vars
export const asyncIdentity: asyncIdentity = async a => a;

export type ReactComponent<Props = unknown> = React.ComponentClass<Props> | React.FunctionComponent<Props>;

export type Context = {
  req?: Request,
  res?: Response,
  store: any;
}


export default EnvComponentContext;
