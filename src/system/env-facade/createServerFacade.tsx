import * as React from 'react';
import { createFacade } from './createFacade';
import AsyncPage from './AsyncPage';
import Helmet from 'react-helmet';


interface clientStats {
  namedChunkGroups: {
    [propname: string]: {
      chunks: string[];
      assets: string[];
      children: object;
      childAssets: object;
    }
  }
}

const createServerFacade: createFacade = ctx => {

  return ({
    middleware: middleware => async () => {
      try {
        await middleware(ctx);
      } catch (err) {
        console.log('error: ', err)
      }
    },
    pageLoader: component_path => props => {
      const chunkName = component_path.replace(/\//g, '-') + 'index';
      const clientStats: clientStats = ctx.clientStats;
      const { assets } = clientStats.namedChunkGroups[chunkName];
      const scripts = assets.filter(item => item.endsWith('.js')).map(item => (
        <script type="text/javascript" key={item} src={`http://localhost:8080/public/${item}`} />
      ));
      const styles = assets.filter(item => item.endsWith('.css')).map(item => (
        <link rel="stylesheet" key={item} href={`http://localhost:8080/public/${item}`} />
      ));

      const SuccessComponent = ({ Page }: any) => (
        <>
          <Helmet>
            {scripts}
            {styles}
          </Helmet>
          <Page {...props} />
        </>
      );

      return <AsyncPage component_path={component_path} SuccessComponent={SuccessComponent} />
    }
  })
}



export default createServerFacade;