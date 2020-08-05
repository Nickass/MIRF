import * as React from 'react'
import { Store } from 'redux';

type ReactComp = React.FunctionComponent<any> | React.ComponentClass<any>;

export interface Facade {
  EnvMiddleware: ReactComp;
  EnvPageLoader: ReactComp;
  EnvErrorProtector: ReactComp;
}
export type EnvContext = { store: Store, [propName: string]: any };
export type createFacade = (ctx: EnvContext) => Facade;

export const createFacade: createFacade = ctx => {
  // const ctx = createContext(ctx.store);
  
  return ({
    EnvMiddleware:  () => <div>Undefined getEnvMiddleware!</div>,
    EnvPageLoader: () => <div>Undefined getEnvPageLoader!</div>,
    EnvErrorProtector: () => <div>Undefined EnvErrorProtector!</div>
  })
}

export default createFacade;