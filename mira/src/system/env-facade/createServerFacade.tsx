import { Facade, EnvContext } from './createFacade';
import getEnvExternalComponent from '../components/ExternalComponent/server';
import getEnvPageModule from '../components/PageModule/server';
import getEnvErrorProtector from '../components/ErrorProtector/server';
import { memoize } from 'lodash';

export type ServerEnvContext = EnvContext & {
  req: any;
  res: any;
  routerContext: any;
}

const createServerFacade = (ctx: ServerEnvContext): Facade => {
  return ({
    EnvExternalComponent: getEnvExternalComponent(ctx),
    EnvPageModule: getEnvPageModule(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createServerFacade;