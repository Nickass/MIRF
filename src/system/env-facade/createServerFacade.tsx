import { createFacade } from './createFacade';
import getEnvPage from '../components/Page/server';
import getErrorProtector from '../components/ErrorBoundary/server';
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