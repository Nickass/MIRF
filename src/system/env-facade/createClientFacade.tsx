import { Facade, EnvContext } from './createFacade';
import getEnvMiddleware from '../components/Middleware/client';
import getEnvPageModule from '../components/PageModule/client';
import getEnvErrorProtector from '../components/ErrorProtector/client';
import { memoize } from 'lodash';


export type ClientEnvContext = EnvContext & {}

const createClientFacade = (ctx: ClientEnvContext): Facade => {
  return ({
    EnvMiddleware:  getEnvMiddleware(ctx),
    EnvPageModule: getEnvPageModule(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createClientFacade;