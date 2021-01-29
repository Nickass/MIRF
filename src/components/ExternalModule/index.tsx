import * as React from 'react';
import EnvComponentContext, { Context, ReactComponent } from '..';
import { AsyncComponentProps } from '../AsyncComponent';

export interface ExternalModuleProps extends Omit<AsyncComponentProps, 'children' | 'id'> {
  id?: string;
  href: string;
  children?: React.ReactNode;
  provided?: { [key: string]: unknown; }
}

export interface ExpectedExport {
  default: ReactComponent;
  init?: (props: { [key: string]: unknown }, ctx: Context) => Promise<unknown>; // eslint-disable-line no-unused-vars
  config?: any; // TODO
}

const ExternalModule: ReactComponent<ExternalModuleProps> = props => {
  const { ExternalModule } = React.useContext(EnvComponentContext);
  return <ExternalModule {...props} />;
};

export default ExternalModule;
