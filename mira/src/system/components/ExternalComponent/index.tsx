import * as React from 'react';
import ENVContext from '~/system/env-facade/FacadeContext';

type ExternalComponentProps = {
  url: any;
  provide?: {
    [key: string]: any;
  }
}

export const ExternalComponent: React.SFC<ExternalComponentProps> = ({ url, provide = {} }) => {
  const { EnvExternalComponent } = React.useContext(ENVContext);

  return <EnvExternalComponent url={url} provide={provide} />;
};

export default ExternalComponent;