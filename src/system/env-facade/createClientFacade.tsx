import { Facade, EnvContext } from './createFacade';
import getEnvPageLoader from '../components/PageLoader/client';
import getEnvErrorProtector from '../components/ErrorProtector/client';
import { memoize } from 'lodash';


export type ClientEnvContext = EnvContext & {}

const createClientFacade = (ctx: ClientEnvContext): Facade => {
  return ({
    middleware: middleware => async () => {
      await middleware(ctx);
    },
    EnvPageLoader: getEnvPageLoader(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createClientFacade;