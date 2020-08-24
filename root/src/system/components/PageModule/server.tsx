import * as React from 'react';
import Helmet from 'react-helmet';
import { ServerEnvContext } from '~/system/env-facade/createServerFacade';


type clientStats = {
  namedChunkGroups: {
    [propname: string]: {
      chunks: string[];
      assets: string[];
      children: object;
      childAssets: object;
    }
  }
}
type PageModuleProps = {
  Component: any;
  path: string;
}
type PageModule = React.FunctionComponent<PageModuleProps> | React.ComponentClass<PageModuleProps>;


export default function getPageModule(ctx: ServerEnvContext): PageModule {
  return ({ path, Component }) => {
    const chunkName = path.replace(/\//g, '-') + 'index';
    const clientStats: clientStats = ctx.clientStats;
    const { assets } = clientStats.namedChunkGroups[chunkName];
    const scripts = assets.filter(item => item.endsWith('.js')).map(item => (
      <script type="text/javascript" key={item} src={`http://localhost:8080/${item}`} />
    ));
    const styles = assets.filter(item => item.endsWith('.css')).map(item => (
      <link rel="stylesheet" key={item} href={`http://localhost:8080/${item}`} />
    ));
    const pageModule = require('~/App/' + path + 'index'); // TODO: loading from client scripts

    ctx.store.dispatch({
      type: 'UPSERT_ASYNC_COMPONENT_SUCCESS',
      payload: { id: `request-page-${path}`, data: true }
    });

    return (
      <>
        <Helmet>
          {scripts}
          {styles}
        </Helmet>
        <Component pageModule={pageModule} />
      </>
    );
  }
};