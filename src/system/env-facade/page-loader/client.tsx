import * as React from 'react'
import AsyncPage from './AsyncPage';

type PageProps = { [propName: string]: any }
type Page = React.FunctionComponent<PageProps> | React.ComponentClass<PageProps>;
type pageLoader = (path: string) => Page;

export default function getPageLodader(ctx: any): pageLoader {
  return component_path => props => {
    const SuccessComponent = React.useCallback(({ Page }: any) => {
      if (!Page || !Page.type) {
        const chunkName = component_path.replace(/\//g, '-');
        const pageModuleName = `./App/${component_path}index.tsx`;
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
    return <AsyncPage component_path={component_path} SuccessComponent={SuccessComponent} />
  }
}