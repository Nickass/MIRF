import * as React from 'react'
import { Store } from 'redux';

type PageProps = { [propName: string]: any }
type Page = React.FunctionComponent<PageProps> | React.ComponentClass<PageProps>;
type middleware = (ctx: object) => Promise<any>
export interface Facade {
  middleware: (middleware: middleware) => void;
  pageLoader: (path: string) => Page;
}
export type createFacade = (ctx: { store: Store, [propName: string]: any }) => Facade;
export const createFacade: createFacade = ctx => {
  // const ctx = createContext(ctx.store);
  
  return ({
    middleware: md => {},
    pageLoader: path => () => <div>Undefinded env!</div>
  })
}

export default createFacade;