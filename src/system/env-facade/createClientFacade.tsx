import { createFacade } from './createFacade';
import getEnvPage from '../components/Page/client';
import getEnvErrorProtector from '../components/ErrorProtector/client';
import { memoize } from 'lodash';

const createClientFacade: createFacade = ctx => {
  return ({
    middleware: middleware => async () => {
      await middleware(ctx);
    },
    EnvPage: getEnvPage(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createClientFacade;