/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import * as React from 'react';
import EntryModule from 'ENTRYMODULE';

__webpack_public_path__ = __home_public_path__;

const componentState: { [propName: string]: React.Dispatch<ReactComponent> } = {};

const WrapperModule:ReactComponent = props => {
  const [Component, setComponent] = React.useState(() => EntryModule);

  componentState[ENTRYMODULE] = setComponent;

  return <Component {...props} />;
};

export * from 'ENTRYMODULE';
export default WrapperModule;

if (module.hot) {
  module.hot.accept('ENTRYMODULE', () => {
    componentState[ENTRYMODULE](() => require('ENTRYMODULE').default);
  });
}
