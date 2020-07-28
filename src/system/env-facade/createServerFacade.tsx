import { createFacade } from './createFacade';
import getPageLoader from './page-loader/server';
import getErrorProtector from './error-handler/server';
import { memoize } from 'lodash';

const createServerFacade: createFacade = ctx => {
  return ({
    middleware: middleware => async () => {
      try {
        await middleware(ctx);
      } catch (err) {
        console.log('error: ', err)
      }
    },
    pageLoader: getPageLoader(ctx),
    ErrorProtector: memoize(getErrorProtector)(ctx)
  })
}



export default createServerFacade;