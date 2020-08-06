import { Facade, EnvContext } from './createFacade';
import getEnvMiddleware from '../components/Middleware/server';
import getEnvPageModule from '../components/PageModule/server';
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
    EnvMiddleware:  getEnvMiddleware(ctx),
    EnvPageModule: getEnvPageModule(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createServerFacade;