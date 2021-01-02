import * as React from 'react';
import ENVContext from '~/env-facade';

type ExternalModuleProps = {
  path: string;
  Component: any;
  timeout?: number;
  provide?: {
    [key: string]: any;
  }
}

export const ExternalModule: React.SFC<ExternalModuleProps> = ({ path, Component, provide = {}, timeout }) => {
  const { EnvExternalModule } = React.useContext(ENVContext);

  return <EnvExternalModule path={path} Component={Component} provide={provide} timeout={timeout} />;
};

export default ExternalModule;
