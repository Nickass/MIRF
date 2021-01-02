import * as React from 'react';
import ENVContext from '~/env-facade';

type ExternalComponentProps = {
  url: string;
  provide?: {
    [key: string]: any;
  }
}

export const ExternalComponent: ReactComponent<ExternalComponentProps> = ({ url, provide = {} }) => {
  const { EnvExternalComponent } = React.useContext(ENVContext);

  return <EnvExternalComponent url={url} provide={provide} />;
};

export default ExternalComponent;
