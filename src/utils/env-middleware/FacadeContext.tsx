import * as React from 'react';
import createEnvMiddlewareFacade from './createClientFacade';

type middleware = (ctx: any, ...args: any[]) => any;
type functionFacade = (...args: any[]) => any

const ctx = {};
const EnvFacadeContext = React.createContext<(arg: middleware) => functionFacade>(createEnvMiddlewareFacade(ctx));
EnvFacadeContext.displayName = 'EnvFacade';

export type createContext = (...args: object[]) => object;
export const createContext: createContext = (store, ...args) => {
  return Object.assign({}, ...args, { store })
}

export const { Consumer, Provider } = EnvFacadeContext;
export default EnvFacadeContext;