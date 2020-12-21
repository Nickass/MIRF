import * as React from 'react';
import EntryModule from "ENTRYMODULE";

__webpack_public_path__ = __home_public_path__;

const componentState = {};

function WrapperModule(props) {
  const [Component, setComponent] = React.useState(() => EntryModule);

  componentState[ENTRYMODULE] = setComponent;

  return <Component {...props} />;
}

export * from "ENTRYMODULE";
export default WrapperModule;

if (module.hot) {
  module.hot.accept('ENTRYMODULE', function() {
    componentState[ENTRYMODULE](() => require('ENTRYMODULE').default);
  });
}