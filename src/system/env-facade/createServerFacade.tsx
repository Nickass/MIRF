import * as React from 'react';
import { createFacade } from './createFacade';
import AsyncPage from './AsyncPage';
import Helmet from 'react-helmet';

const createServerFacade: createFacade = ctx => {

  return ({
    middleware: middleware => async () => {
      try {
        await middleware(ctx);
      } catch (err) {
        console.log('error: ', err)
      }
      // ctx.next();
    },
    pageLoader: chunkName => props => {
      const SuccessComponent = ({ chunkName, Page }: any) => (
        <>
          <Helmet script={[{ 
            type: 'text/javascript', 
            src: `http://localhost:8080/public/${chunkName}.js`,
          }]} />
          <Page {...props} />
        </>
      );

      return <AsyncPage chunkName={chunkName} SuccessComponent={SuccessComponent} />
    }
  })
}



export default createServerFacade;