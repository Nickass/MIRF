import * as React from 'react'
import { createFacade } from './createFacade';
import AsyncPage from './AsyncPage'; 

const createClientFacade: createFacade = ctx => {
  return ({
    middleware: middleware => async () => {
      await middleware(ctx);
    },
    pageLoader: component_path => props => {
      const SuccessComponent = ({ Page }: any) => {
        if (!Page) {
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
        
        return <Page {...props} />
      };

      return <AsyncPage component_path={component_path} SuccessComponent={SuccessComponent} />
    }
  })
}



export default createClientFacade;