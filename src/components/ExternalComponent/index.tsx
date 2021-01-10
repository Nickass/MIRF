import * as React from 'react';
import EnvComponentContext from '~/components';

type ExternalComponentProps = {
  url: string;
  provide?: {
    [key: string]: any;
  }
}

export const ExternalComponent: ReactComponent<ExternalComponentProps> = ({ url, provide = {} }) => {
  const { ExternalComponent } = React.useContext(EnvComponentContext);

  return <ExternalComponent url={url} provide={provide} />;
};

export default ExternalComponent;
