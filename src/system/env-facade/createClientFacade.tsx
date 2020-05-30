import * as React from 'react'
import { createFacade } from './createFacade';
import AsyncPage from './AsyncPage'; 

const createClientFacade: createFacade = ctx => {
  return ({
    middleware: middleware => async () => {
      await middleware(ctx);
    },
    pageLoader: chunkName => props => {
      const SuccessComponent = ({ chunkName, Page }: any) => {
        if (!Page) {
          const pageModuleName = `./pages/${chunkName}/index.tsx`;
          const chunksPlace = (window as any)["webpackJsonp"]
          const chunk = chunksPlace.find((item: any) => item[0][0] === chunkName);
          const modules = chunk[1];
          const pageModuleFunction = modules[pageModuleName];
          const pageModuleExport = { exports: {} } as any;
  
          pageModuleFunction(pageModuleExport, pageModuleExport.exports, __webpack_require__);
  
          Page = pageModuleExport.exports.default;
        }
        
        return <Page {...props} />
      };

      return <AsyncPage chunkName={chunkName} SuccessComponent={SuccessComponent} />
    }
  })
}



export default createClientFacade;