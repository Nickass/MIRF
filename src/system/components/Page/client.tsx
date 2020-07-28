import * as React from 'react'
import AsyncPage from './AsyncPage';

type PageProps = { path: string; props: { [propName: string]: any } }
type Page = React.FunctionComponent<PageProps> | React.ComponentClass<PageProps>;

export default function getPageLodader(ctx: any): Page {
  return ({path, props}) => {
    const SuccessComponent = React.useCallback(({ Page }: any) => {
      if (!Page || !Page.type) {
        const chunkName = path.replace(/\//g, '-');
        const pageModuleName = `./App/${path}index.tsx`;
        const chunksPlace = (window as any)["webpackJsonp"]
        const chunk = chunksPlace.find((item: any) => item[0][0] === (chunkName + 'index'));
        const modules = chunk[1];
        const pageModuleFunction = modules[pageModuleName];
        const pageModuleExport = { exports: {} } as any;
  
        pageModuleFunction(pageModuleExport, pageModuleExport.exports, __webpack_require__);
  
        Page = pageModuleExport.exports.default;
      }
      Page = React.useRef(Page).current;

      return <Page {...props} />
    }, []);
    return <AsyncPage component_path={path} SuccessComponent={SuccessComponent} />
  }
}