import { Facade, EnvContext } from '.';
import getEnvExternalComponent from '../components/ExternalComponent/server';
import getEnvExternalModule from '../components/ExternalModule/server';
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
    EnvExternalModule: getEnvExternalModule(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createServerFacade;