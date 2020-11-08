// import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import EntryModule from "ENTRYMODULE";


const componentState = {};

function HotModule(props) {
  const [Component, setComponent] = React.useState(() => EntryModule);

  componentState[ENTRYMODULE] = setComponent;

  return <Component {...props} />;
}

export * from "ENTRYMODULE";
export default HotModule;

if (module.hot) {
  module.hot.accept('ENTRYMODULE', function() {
    componentState[ENTRYMODULE](() => require('ENTRYMODULE').default);
  });
}