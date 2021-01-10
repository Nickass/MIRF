import * as React from 'react';
import EnvComponentContext from '~/components';

type ExternalModuleProps = {
  path: string;
  Component: any;
  timeout?: number;
  provide?: {
    [key: string]: any;
  }
}

export const ExternalModule: ReactComponent<ExternalModuleProps> = ({ path, Component, provide = {}, timeout }) => {
  const { ExternalModule } = React.useContext(EnvComponentContext);

  return <ExternalModule path={path} Component={Component} provide={provide} timeout={timeout} />;
};

export default ExternalModule;
