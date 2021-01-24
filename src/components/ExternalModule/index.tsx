import * as React from 'react';
import EnvComponentContext, { Context } from '~/components';

export type ExternalModuleProps = {
  path: string;
  Component: ReactComponent;
  timeout?: number;
  provided?: {
    [key: string]: unknown;
  }
}

export type ExpectedExport = {
  default: ReactComponent,
  init?: (props: { [key: string]: unknown }, ctx: Context) => Promise<unknown>, // eslint-disable-line no-unused-vars
}

export const ExternalModule: ReactComponent<ExternalModuleProps> = ({ Component, path, provided, timeout }) => {
  const { ExternalModule } = React.useContext(EnvComponentContext);

  return <ExternalModule Component={Component} path={path} provided={provided} timeout={timeout} />;
};

export default ExternalModule;
