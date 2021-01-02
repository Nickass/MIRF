import * as React from 'react'
import { ClientEnvContext } from '~/env-facade/client';
import ExternalModule from '~/components/ExternalModule';

type ExternalModuleProps = {
  url: string;
  provide?: {
    [key: string]: any;
  }
}
type ExternalModule = React.FunctionComponent<ExternalModuleProps> | React.ComponentClass<ExternalModuleProps>;

export default function getExternalModule(ctx: ClientEnvContext): ExternalModule {
  return ({ url, provide = {} }) => {
    const SuccessComponent: any = React.useCallback((props: any) => {
      const { default: ExternalPage } = props;
      return <ExternalPage />
    }, []);

    return <ExternalModule Component={SuccessComponent} path={url} provide={provide} />;
  }
}
