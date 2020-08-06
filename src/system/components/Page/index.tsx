import * as React from 'react';
import Helmet from 'react-helmet';
import ENVContext from '~/system/env-facade/FacadeContext';
import { config } from '~/system/components/Router/getPagesConfig';

type PageProps = {
  config: config;
  props: { [propName: string]: any };
}

export const Page: React.SFC<PageProps> = ({ config, props, children }) => {
  const { EnvPageModule } = React.useContext(ENVContext);

  const PageComponent = React.useCallback(({ pageModule }) => {
    const { default: Page } = pageModule;

    return (
      <>
        <Helmet>
          <title>{config.name}</title>
        </Helmet>
        <Page {...props}>
          {children}
        </Page>
      </>
    )
  }, [config, props, children]);

  return (
    <EnvPageModule path={config.dir.replace(/\.\//, '')} Component={PageComponent} />
  );
};

export default Page;