import * as React from 'react';
import ENVContext from '~/system/env-facade/FacadeContext';

type PageModuleProps = {
  path: string;
  Component: any;
}

export const PageModule: React.SFC<PageModuleProps> = ({ path, Component }) => {
  const { EnvPageModule } = React.useContext(ENVContext);

  return <EnvPageModule path={path} Component={Component} />;
};

export default PageModule;