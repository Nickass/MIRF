import * as React from 'react';
import ENVContext from '~/system/env-facade';

type ExternalModuleProps = {
  path: string;
  Component: any;
  provide?: {
    [key: string]: any;
  }
}

export const ExternalModule: React.SFC<ExternalModuleProps> = ({ path, Component, provide = {} }) => {
  const { EnvExternalModule } = React.useContext(ENVContext);

  return <EnvExternalModule path={path} Component={Component} provide={provide} />;
};

export default ExternalModule;