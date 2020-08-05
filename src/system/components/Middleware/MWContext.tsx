import * as React from 'react';

export type MWContextValue = {
  [middlewareName: string]: (props: {}) => Promise<any>;
}

const MWContext = React.createContext<MWContextValue>({});
MWContext.displayName = 'MWContext';

export const { Consumer, Provider } = MWContext;
export default MWContext;