// modules
import * as React from 'react';
import { promises, asyncComponentState, functionCallCounter } from './state';
import { isServer } from '~/store';

export type AsyncComponentProps = {
  wait: () => Promise<object | undefined>;
  resolve: (data: any) => any;
  reject?: () => void;
};

// TODO: think about update wait prop
const AsyncComponent: React.ComponentType<AsyncComponentProps> = function ({resolve, reject, wait}) {
  const functionCallId = functionCallCounter.value++; // TODO: prevent infinite increase counter for the client 
  const [myData, setData] = React.useState(asyncComponentState[functionCallId]);

  const resolver = async () => {
    const data = await wait() || {};
    if (isServer) { // For the server we must return fully loaded component
      functionCallCounter.value--; // A collision of id should never happens due to all of this functions run together
      asyncComponentState[functionCallId] = data;
      return resolve(data);
    } else {
      setData(data); // if we on client just update state
    }
  }
  if (!myData) promises[functionCallId] = resolver()


  return myData ? resolve(myData) : <div data-async-id={functionCallId}>Loading...</div>;
}

export default AsyncComponent;



