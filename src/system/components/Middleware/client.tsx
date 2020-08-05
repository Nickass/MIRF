import * as React from 'react'
import { ClientEnvContext } from '~/system/env-facade/createClientFacade';
import AsyncComponent from '~/system/components/AsyncComponent';

type MiddlewareProps = { path: string; render: any; }
type Middleware = React.FunctionComponent<MiddlewareProps> | React.ComponentClass<MiddlewareProps>;

export default function getMiddlewareLodader(ctx: ClientEnvContext): Middleware {
  return ({ path, render }) => {
    const middlewareModuleName = `./App/${path}middlewares/index.tsx`;
    const all = "./App lazy recursive ^\\.\\/.*middlewares/index$";
    const asyncId = `middlewares-${path}`;

    const SuccessComponent: any = React.useCallback(({ middlewares }: any) => {
      try {
        if (!middlewares) {
          middlewares = __webpack_require__(middlewareModuleName);
        }
      } catch (err) { /* It's ok. We just don't have middleware module */ }

      if (module.hot) {
        const [mwstate, setMW] = React.useState({ middlewares });
  
        const acceptFunction = () => {
          const isCurrent = SuccessComponent._mounted;
          const middlewares = __webpack_require__(middlewareModuleName);
          if (isCurrent) setMW({ middlewares });
        };
  
        React.useEffect(() => {
          const lazyModule = require.cache[all];

          lazyModule?.hot?.accept(middlewareModuleName, acceptFunction);
          module.hot?.accept(middlewareModuleName, acceptFunction);
          SuccessComponent._mounted = true;

          return () => { SuccessComponent._mounted = false; }
        }, [middlewareModuleName]);
  
        middlewares = mwstate.middlewares;
      }

      return render(middlewares);
    }, []);
    
    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent}>
        {async () => {
          try {
            const {...middlewares} = await import(/* webpackChunkName: "[request]" */ '~/App/' + path + 'middlewares/index');
            await new Promise(res => setTimeout(res, 300))

            return { middlewares }
          } catch (err) { return null; }
        }}
      </AsyncComponent>
    );
  }
}