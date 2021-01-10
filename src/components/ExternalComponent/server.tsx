import * as React from 'react';
import ExternalModule from '~/components/ExternalModule';

type ExternalModuleProps = {
  url: string;
  provide?: {
    [key: string]: any;
  }
}

export default function getExternalModule(ctx: any): ReactComponent<ExternalModuleProps> {
  return ({ url, provide = {} }) => {
    const SuccessComponent: any = React.useCallback((props: any) => {
      const { default: ExternalPage } = props;
      return <ExternalPage />;
    }, []);

    return <ExternalModule Component={SuccessComponent} path={url} provide={provide} />;
  };
}
