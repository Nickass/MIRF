import { Facade, EnvContext } from '.';
import getEnvExternalComponent from '../components/ExternalComponent/client';
import getEnvExternalModule from '../components/ExternalModule/client';
import getEnvErrorProtector from '../components/ErrorProtector/client';
import { memoize } from 'lodash';


export type ClientEnvContext = EnvContext & {}

const createClientFacade = (ctx: ClientEnvContext): Facade => {
  return ({
    EnvExternalComponent: getEnvExternalComponent(ctx),
    EnvExternalModule: getEnvExternalModule(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createClientFacade;