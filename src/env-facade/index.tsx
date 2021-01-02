import * as React from 'react'
import { Store } from 'redux';

export interface Facade {
  EnvExternalComponent: ReactComponent<any>;
  EnvExternalModule: ReactComponent<any>;
  EnvErrorProtector: ReactComponent<any>;
}
export type EnvContext = { store: Store, [propName: string]: any };
export type createFacade = (ctx: EnvContext) => Facade; // eslint-disable-line no-unused-vars

// eslint-disable-next-line arrow-body-style
export const createFacade: createFacade = ctx => { // eslint-disable-line no-unused-vars
  // const ctx = createContext(ctx.store);

  return ({
    EnvExternalComponent: () => <div>Undefined getEnvExternalComponent!</div>,
    EnvExternalModule: () => <div>Undefined getEnvExternalModule!</div>,
    EnvErrorProtector: () => <div>Undefined EnvErrorProtector!</div>
  });
};

const EnvFacadeContext = React.createContext<Facade>(createFacade({ store: {} as any }));
EnvFacadeContext.displayName = 'EnvFacade';

export const { Consumer, Provider } = EnvFacadeContext;
export default EnvFacadeContext;

