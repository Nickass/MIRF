import * as React from 'react';
import createFacade, { Facade } from './createFacade';

const EnvFacadeContext = React.createContext<Facade>(createFacade({ store: {} as any }));
EnvFacadeContext.displayName = 'EnvFacade';

export const { Consumer, Provider } = EnvFacadeContext;
export default EnvFacadeContext;