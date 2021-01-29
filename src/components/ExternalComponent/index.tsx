import * as React from 'react';
import EnvComponentContext, { ReactComponent } from '..';
import { ExternalModuleProps } from '../ExternalModule';

export interface ExternalComponentProps extends Omit<ExternalModuleProps, 'SuccessComponent'> {
  innerProps?: { [key: string]: unknown; };
}

const ExternalComponent: ReactComponent<ExternalComponentProps> = props => {
  const { ExternalComponent } = React.useContext(EnvComponentContext);

  return <ExternalComponent {...props} />;
};

export default ExternalComponent;
