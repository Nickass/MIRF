import { createFacade } from './createFacade';
import getEnvPage from '../components/Page/client';
import getErrorProtector from '../components/ErrorBoundary/client';
import { memoize } from 'lodash';

const createClientFacade: createFacade = ctx => {
  return ({
    middleware: middleware => async () => {
      await middleware(ctx);
    },
    EnvPage: getEnvPage(ctx),
    ErrorProtector: memoize(getErrorProtector)(ctx)
  })
}



export default createClientFacade;