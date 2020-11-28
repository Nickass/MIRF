declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.css';
declare module '*.scss';

declare var CLIENT_JS_FILE_CONTENTS: string;
declare var CLIENT_CSS_FILE_CONTENTS: string;
declare var PROVIDED_MODULES: any;
declare var __webpack_init_sharing__: any;
declare var __webpack_share_scopes__: any;
declare var __webpack_exports__: any;
declare var __webpack_require__: any;
declare var react: any;
declare var reactDom: any;
declare var styledComponents: any;

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  REDUX_STATE: any;
  ROOT_COMPONENT: string;
}

declare namespace Express {
  export interface Request {
    _reduxStore?: any;
  }
}

declare type asyncIdentity<T = any> = (a: T) => Promise<T>;