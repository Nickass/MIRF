import { Facade, EnvContext } from './createFacade';
import getEnvPageLoader from '../components/PageLoader/server';
import getEnvErrorProtector from '../components/ErrorProtector/server';
import { memoize } from 'lodash';

export type ServerEnvContext = EnvContext & {
  req: any;
  res: any;
  clientStats: any;
  routerContext: any;
}

const createServerFacade = (ctx: ServerEnvContext): Facade => {
  return ({
    middleware: middleware => async () => {
      try {
        await middleware(ctx);
      } catch (err) {
        console.log('error: ', err)
      }
    },
    EnvPageLoader: getEnvPageLoader(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createServerFacade;