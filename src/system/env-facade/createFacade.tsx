import * as React from 'react'
import { Store } from 'redux';

type ReactComp = React.FunctionComponent<any> | React.ComponentClass<any>;

type PageProps = { [propName: string]: any }
type Page = ReactComp;
type middleware = (ctx: object) => Promise<any>
export interface Facade {
  middleware: (middleware: middleware) => void;
  EnvPage: Page;
  EnvErrorProtector: ReactComp;
}
export type createFacade = (ctx: { store: Store, [propName: string]: any }) => Facade;
export const createFacade: createFacade = ctx => {
  // const ctx = createContext(ctx.store);
  
  return ({
    middleware: md => {},
    EnvPage: () => <div>Undefined getEnvPage!</div>,
    EnvErrorProtector: () => <div>Undefined EnvErrorProtector!</div>
  })
}

export default createFacade;