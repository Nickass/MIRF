declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.css';
declare module '*.scss';

declare var __webpack_exports__: any;
declare var __webpack_require__: any;

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  REDUX_STATE: any;
}

declare namespace Express {
  export interface Request {
    _reduxStore?: any;
  }
}