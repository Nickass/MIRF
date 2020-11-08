import * as React from 'react';
import ENVContext from '~/system/env-facade/FacadeContext';

type ExternalComponentProps = {
  url: any;
}

export const ExternalComponent: React.SFC<ExternalComponentProps> = ({ url }) => {
  const { EnvExternalComponent } = React.useContext(ENVContext);

  return <EnvExternalComponent url={url} />;
};

export default ExternalComponent;