import * as React from 'react';
import Axios from 'axios';
import AsyncComponent from '../AsyncComponent';
import { Context, ReactComponent } from '..';
import { ExternalModuleProps, ExpectedExport } from '.';
import defaultProvided from './provided';

export default function getExternalModule(ctx: Context): ReactComponent<ExternalModuleProps> {
  const externalCache: { [key: string]: ExpectedExport } = {}; // TODO: test with two imports the same module. The provided modules can be different and leads to bugs.

  return ({ SuccessComponent: Component, href, id, provided = defaultProvided, ...restProps }) => {
    const asyncId = `request-page-${id || href}`;
    const SuccessComponent = React.useCallback((props) => {
      const defaultComponent = () => (
        <>The module by path ({href}) haven't export default component!</>
      );
      const external: { exports: ExpectedExport } = { exports: { default: defaultComponent } };
      const publicPath = `${href.split('/').slice(0, -1).join('/').replace(/\/$/, '')}/`;

      if (!externalCache[href]) {
        const { body } = props;
        // eslint-disable-next-line no-new-func
        (new Function('module', 'exports', 'require', `
          var __home_public_path__ = '${publicPath}';
          ${body};
        `))(external, external.exports, (p: string) => provided[p]);
        externalCache[href] = external.exports;
      }

      return (
        <Component {...externalCache[href]} />
      )
    }, [Component]);
    const awaitFunc = React.useCallback(async () => {
      try {
        const { data: body } = await Axios.get(href);
        return { body };
      } catch (err) {
        throw new Error(`Error while loading a script by "${href}" url.\n`);
      }
    }, [href]);

    return (
      <AsyncComponent {...restProps} id={asyncId} SuccessComponent={SuccessComponent} caching={true}>
        {awaitFunc}
      </AsyncComponent>
    );
  }
}
