import * as React from 'react';
import ExternalModule, { ExpectedExport } from '../ExternalModule';
import AsyncComponent from '../AsyncComponent';
import { Context, asyncIdentity, ReactComponent } from '..';
import { ExternalComponentProps } from '.';

export default function getExternalComponent(ctx: Context): ReactComponent<ExternalComponentProps> {
  return ({ innerProps = {}, ...restProps }) => {
    const { id, href } = restProps;
    const SuccessComponent: ReactComponent<ExpectedExport> = React.useCallback((props: ExpectedExport) => {
      const { default: TheExternalModule, init = asyncIdentity } = props;

      return (
        <AsyncComponent id={`init-component-${id || href}`} SuccessComponent={TheExternalModule}>
          {() => init(innerProps, ctx)}
        </AsyncComponent>
      );
    }, []);

    return <ExternalModule {...restProps} SuccessComponent={SuccessComponent} />;
  };
}
