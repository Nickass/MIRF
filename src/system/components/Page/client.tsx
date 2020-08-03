import * as React from 'react'
import { ClientEnvContext } from '~/system/env-facade/createClientFacade';
import AsyncComponent from '~/system/components/AsyncComponent';

type PageProps = { path: string; props: { [propName: string]: any } }
type Page = React.FunctionComponent<PageProps> | React.ComponentClass<PageProps>;

export default function getPageLodader(ctx: ClientEnvContext): Page {
  return ({path, props}) => {
    const pageModuleName = `./App/${path}index.tsx`;
    const all = "./App lazy recursive ^\\.\\/.*index$";
    const asyncId = `request-page-${path}`;

    const SuccessComponent: any = React.useCallback(({ Page }: any) => {
      if (!Page || !Page.type) {
        Page = __webpack_require__(pageModuleName).default;
      }

      if (module.hot) {
        const [Component, setComponent] = React.useState({ Page });
  
        const acceptFunction = () => {
          const isCurrent = SuccessComponent._mounted;
          const { default: Page } = __webpack_require__(pageModuleName);
          if (isCurrent) setComponent({ Page });
        };
  
        React.useEffect(() => {
          const lazyModule = require.cache[all];

          lazyModule?.hot?.accept(pageModuleName, acceptFunction);
          module.hot?.accept(pageModuleName, acceptFunction);
          SuccessComponent._mounted = true;

          return () => { SuccessComponent._mounted = false; }
        }, [pageModuleName]);
  
        Page = Component.Page;
      }

      return <Page {...props} />
    }, []);
    
    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent}>
        {async () => {
          const { default: Page } = await import(/* webpackChunkName: "[request]" */ '~/App/' + path + 'index');
          await new Promise(res => setTimeout(res, 300))

          return { Page }
        }}
      </AsyncComponent>
    );
  }
}