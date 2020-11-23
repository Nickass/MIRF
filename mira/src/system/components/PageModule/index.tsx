import * as React from 'react';
import ENVContext from '~/system/env-facade/FacadeContext';

type PageModuleProps = {
  path: string;
  Component: any;
  provide?: {
    [key: string]: any;
  }
}

export const PageModule: React.SFC<PageModuleProps> = ({ path, Component, provide = {} }) => {
  const { EnvPageModule } = React.useContext(ENVContext);

  return <EnvPageModule path={path} Component={Component} provide={provide} />;
};

export default PageModule;