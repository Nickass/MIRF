import * as React from 'react';
import AsyncComponent from '~/system/components/AsyncComponent';

type AyncPageProps = {
  componentPath: string;
  SuccessComponent: React.SFC<any>;
};

class AyncPage extends React.Component<AyncPageProps> {
  render () {
    const { componentPath, SuccessComponent } = this.props;
    const asyncId = `request-page-${componentPath}`;

    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent}>
        {async () => {
          const Page = await import(/* webpackChunkName: "[request]" */ '~/App/' + componentPath + 'index')
            .then(m => m.default);
          await new Promise(res => setTimeout(res, 300))

          return { componentPath, Page }
        }}
      </AsyncComponent>
    )
  }
}

export default AyncPage;