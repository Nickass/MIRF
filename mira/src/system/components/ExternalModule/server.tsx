import * as React from 'react'
import { ServerEnvContext } from '~/system/env-facade/server';
import AsyncComponent from '~/system/components/AsyncComponent';
import Axios from 'axios';

type ExternalModuleProps = {
  path: string;
  Component: any;
  provide?: {
    [key: string]: any;
  }
}
type ExternalModule = React.FunctionComponent<ExternalModuleProps> | React.ComponentClass<ExternalModuleProps>;

export default function getExternalModule(ctx: ServerEnvContext): ExternalModule {
  const externalCache: any = {};

  return ({ path, Component, provide = {} }) => {
    const asyncId = `request-page-${path}`;
    
    const SuccessComponent = React.useCallback((props) => {
      const external: any = { exports: {} };

      if (!externalCache[path]) {
        const { body } = props;
        (new Function('module', 'exports', 'require', `
          ${body};
        `))(external, external.exports, (p: any) => provide[p.replace(/^#external\//, '')] || PROVIDED_MODULES[p]);
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