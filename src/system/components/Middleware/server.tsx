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
type MiddlewareProps = { path: string; Component: any; }
type Middleware = React.FunctionComponent<MiddlewareProps> | React.ComponentClass<MiddlewareProps>;


export default function(ctx: ServerEnvContext): Middleware {
  return function EnvMiddleware({ path, Component }) {
    const chunkName = path.replace(/\//g, '-') + 'middlewares-index';
    const clientStats: clientStats = ctx.clientStats;
    const chunk = clientStats.namedChunkGroups[chunkName];
    
    if (!chunk) return <Component middlewares={null} />;

    const scripts = chunk.assets.filter(item => item.endsWith('.js')).map(item => (
      <script type="text/javascript" key={item} src={`http://localhost:8080/public/${item}`} />
    ));
    const styles = chunk.assets.filter(item => item.endsWith('.css')).map(item => (
      <link rel="stylesheet" key={item} href={`http://localhost:8080/public/${item}`} />
    ));
    const { ...middlewares } = require('~/App/' + path + 'middlewares/index'); // TODO: loading from client scripts

    ctx.store.dispatch({
      type: 'UPSERT_ASYNC_COMPONENT_SUCCESS',
      payload: { id: `middlewares-${path}`, data: true }
    });

    return (
      <>
        <Helmet>
          {scripts}
          {styles}
        </Helmet>
        <Component middlewares={middlewares} />
      </>
    )
  }
};