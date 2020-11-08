import * as React from 'react'
import { ServerEnvContext } from '~/system/env-facade/createServerFacade';
import AsyncComponent from '~/system/components/AsyncComponent';
import Axios from 'axios';

type PageModuleProps = {
  path: string;
  Component: any;
}
type PageModule = React.FunctionComponent<PageModuleProps> | React.ComponentClass<PageModuleProps>;

export default function getPageModule(ctx: ServerEnvContext): PageModule {
  const externalCache: any = {};

  return ({ path, Component }) => {
    const asyncId = `request-page-${path}`;
    
    const SuccessComponent = React.useCallback((props) => {
      const external: any = { exports: {} };

      if (!externalCache[path]) {
        const { body } = props;
        (new Function('module', 'exports', 'require', `
          ${body};
        `))(external, external.exports, (p: any) => PROVIDED_MODULES[p]);
        externalCache[path] = external;
      }
      
      return (
        <Component {...externalCache[path].exports} />
      )
    }, [Component])

    
    const awaitFunc = React.useCallback(async () => {
      try {
        const { data: body } = await Axios.get(path);
        return { body };
      } catch (err) {
        throw new Error(`Error while loading a script by "${path}" url.\n`);
      }
    }, [path]);

    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent} caching={true}>
        {awaitFunc}
      </AsyncComponent>
    );
  }
}