import { createFacade } from './createFacade';
import getPageLoader from './page-loader/client';
import getErrorProtector from '../ErrorBoundary/client';
import { memoize } from 'lodash';

const createClientFacade: createFacade = ctx => {
  return ({
    middleware: middleware => async () => {
      await middleware(ctx);
    },
    pageLoader: getPageLoader(ctx),
    ErrorProtector: memoize(getErrorProtector)(ctx)
  })
}



export default createClientFacade;