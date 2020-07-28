import * as React from 'react';
import AsyncComponent from '~/system/components/AsyncComponent';

type AyncPageProps = {
  component_path: string;
  SuccessComponent: any;
};

class AyncPage extends React.Component<AyncPageProps> {
  render () {
    const { component_path, SuccessComponent } = this.props;
    const asyncId = `request-page-${component_path}`;

    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent}>
        {async () => {
          const Page = await import(/* webpackChunkName: "[request]" */ '~/App/' + component_path + 'index')
            .then(m => m.default);
          await new Promise(res => setTimeout(res, 300))

          return { component_path, Page }
        }}
      </AsyncComponent>
    )
  }
}

export default AyncPage;