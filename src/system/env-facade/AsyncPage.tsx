import * as React from 'react';
import AsyncComponent from '~/system/AsyncComponent';

type AyncPageProps = {
  chunkName: string;
  SuccessComponent: any;
};

class AyncPage extends React.Component<AyncPageProps> {
  render () {
    const { chunkName, SuccessComponent } = this.props;
    const asyncId = `request-page-${chunkName}`;

    return (
      <AsyncComponent id={asyncId} SuccessComponent={SuccessComponent}>
        {async () => {
          const Page = await import(/* webpackChunkName: "[request]" */ '~/pages/' + chunkName)
            .then(m => m.default || m);

          return { chunkName, Page }
        }}
      </AsyncComponent>
    )
  }
}

export default AyncPage;