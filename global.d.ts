declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.css';
declare module '*.scss';


declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  ASYNC_COMPONENT_STATE: object[];
  REDUX_STATE: any;
}

declare namespace Express {
  export interface Request {
    _reduxStore?: any;
  }
}

declare module 'react-async-ssr' {
  const def: any;
  export default def;
}