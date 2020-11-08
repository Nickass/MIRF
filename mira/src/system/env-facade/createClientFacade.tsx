import { Facade, EnvContext } from './createFacade';
import getEnvExternalComponent from '../components/ExternalComponent/client';
import getEnvPageModule from '../components/PageModule/client';
import getEnvErrorProtector from '../components/ErrorProtector/client';
import { memoize } from 'lodash';


export type ClientEnvContext = EnvContext & {}

const createClientFacade = (ctx: ClientEnvContext): Facade => {
  return ({
    EnvExternalComponent: getEnvExternalComponent(ctx),
    EnvPageModule: getEnvPageModule(ctx),
    EnvErrorProtector: memoize(getEnvErrorProtector)(ctx)
  })
}



export default createClientFacade;