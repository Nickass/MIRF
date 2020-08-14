import * as React from 'react'
import { ClientEnvContext } from '~/system/env-facade/createClientFacade';
import AsyncComponent from '~/system/components/AsyncComponent';

type PageModuleProps = {
  path: string;
  Component: any;
}
type PageModule = React.FunctionComponent<PageModuleProps> | React.ComponentClass<PageModuleProps>;

export default function getPageModule(ctx: ClientEnvContext): PageModule {
  return ({ path, Component }) => {
    const pageModuleName = `./App/${path}index.tsx`;
    const all = "./App lazy recursive ^\\.\\/.*index$";
    const asyncId = `request-page-${path}`;

    const SuccessComponent: any = React.useCallback(({ pageModule }: any) => {
      if (!pageModule) {
        pageModule = __webpack_require__(pageModuleName);
      }

      if (module.hot) {
        const [pageModuleState, setPageModuleState] = React.useState({ pageModule });

        const acceptFunction = () => {
          const isCurrent = SuccessComponent._mounted;
          const pageModule = __webpack_require__(pageModuleName);
          if (isCurrent) setPageModuleState({ pageModule });
        };

        React.useEffect(() => {
          const lazyModule = require.cache[all];

          lazyModule?.hot?.accept(pageModuleName, acceptFunction);
          module.hot?.accept(pageModuleName, acceptFunction);
          SuccessComponent._mounted = true;

          return () => { SuccessComponent._mounted = false; }
        }, [pageModuleName]);

        pageModule = pageModuleState.pageModule;
      }

      return <Component pageModule={pageModule} />
    }, [all, pageModuleName]);

    const awaitFunc = React.useCallback(async () => 
      await import(/* webpackChunkName: "[request]" */ '~/App/' + path + 'index')
    , [path]);

    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent} caching={true}>
        {awaitFunc}
      </AsyncComponent>
    );
  }
}