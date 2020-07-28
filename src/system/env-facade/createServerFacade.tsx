import { createFacade } from './createFacade';
import getEnvPage from '../Page/server';
import getErrorProtector from '../ErrorBoundary/server';
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
    EnvPage: getEnvPage(ctx),
    ErrorProtector: memoize(getErrorProtector)(ctx)
  })
}



export default createServerFacade;