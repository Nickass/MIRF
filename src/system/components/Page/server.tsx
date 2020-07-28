import * as React from 'react';
import AsyncPage from './AsyncPage';
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
type PageProps = { props: {[propName: string]: any;}; path: string; }
type Page = React.FunctionComponent<PageProps> | React.ComponentClass<PageProps>;


export default function(ctx: ServerEnvContext): Page {
  return ({ path, props }) => {
    const chunkName = path.replace(/\//g, '-') + 'index';
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

    return <AsyncPage componentPath={path} SuccessComponent={SuccessComponent} />
  }
};