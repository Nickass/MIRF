import * as React from 'react'
import Axios from 'axios';
import AsyncComponent from '~/components/AsyncComponent';

type ExternalModuleProps = {
  path: string;
  Component: any;
  timeout?: number;
  provide?: {
    [key: string]: any;
  }
}
type ExternalModule = React.FunctionComponent<ExternalModuleProps> | React.ComponentClass<ExternalModuleProps>;

export default function getExternalModule(ctx: any): ExternalModule {
  const externalCache: any = {};

  return ({ path, Component, provide = {}, timeout }) => {
    const asyncId = `request-page-${path}`;

    const SuccessComponent = React.useCallback((props) => {
      const external: any = { exports: {} };
      const publicPath = path.split('/').slice(0, -1).join('/').replace(/\/$/, '') + '/';

      if (!externalCache[path]) {
        const { body } = props;
        (new Function('module', 'exports', 'require', `
          var __home_public_path__ = '${publicPath}';
          ${body};
        `))(external, external.exports, (p: any) => provide[p.replace(/^#external\//, '')] || PROVIDED_MODULES[p]);
        externalCache[path] = external; // TODO: check when script has syntax errors
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
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent} caching={true} timeout={timeout}>
        {awaitFunc}
      </AsyncComponent>
    );
  }
}

