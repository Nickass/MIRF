declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.css';
declare module '*.scss';
declare module '#external/*';

declare let CLIENT_JS_FILE_CONTENTS: string;
declare let CLIENT_CSS_FILE_CONTENTS: string;
declare let PROVIDED_MODULES: any;
declare let __webpack_init_sharing__: any;
declare let __webpack_share_scopes__: any;
declare let __webpack_exports__: any;
declare let __webpack_require__: any;
declare let react: any;
declare let reactDom: any;
declare let styledComponents: any;

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

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    SERVER_URL: string;
  }
}
