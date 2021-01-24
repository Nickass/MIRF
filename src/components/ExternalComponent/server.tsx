import * as React from 'react';
import ExternalModule, { ExpectedExport } from '~/components/ExternalModule';
import AsyncComponent from '~/components/AsyncComponent';
import { Context } from '..';

const asyncIdentity: asyncIdentity = async a => a;

type ExternalComponentProps = {
  url: string;
  provided?: { [key: string]: unknown; }
  innerProps?: { [key: string]: unknown; }
}

export default function getExternalComponent(ctx: Context): ReactComponent<ExternalComponentProps> {
  return ({ url, provided, innerProps = {} }) => {
    const SuccessComponent: ReactComponent = React.useCallback((props: ExpectedExport) => {
      const { default: TheExternalModule, init = asyncIdentity } = props;

      return (
        <AsyncComponent id={`init-component-${url}`} SuccessComponent={TheExternalModule}>
          {() => init(innerProps, ctx)}
        </AsyncComponent>
      );
    }, []);

    return <ExternalModule Component={SuccessComponent} path={url} provided={provided} />;
  };
}
