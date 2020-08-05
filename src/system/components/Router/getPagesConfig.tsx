export interface baseConfig {
  name?: string;
  params?: string;
  redirected?: string[];
  routes?: subConfig[];
}

export interface subConfig {
  id: string;
  path: string;
  dir: string;
  middlewares?: string[];
  props?: { [propName: string]: any };
}

export interface config extends Required<baseConfig>, Required<subConfig> {
  routes: config[];
}

// TODO: implement more options
// {
//  meta
// 	alias,
//  redirect
//  caseSensitive
//  pathToRegexpOptions
// };	

export const allConfigsCtx = require.context('~/App/', true, /config/);

function reorderRoutes(routes: config[]) {
  // TODO: reorder routes by more specific route
  return routes;
}

// TODO: separate this function to two: 1. merge configs; 2. join paths
export const getPagesConfig = ({ id, dir, path, props = {}, middlewares = [] }: subConfig): config => {
  dir = dir.replace(/\/+/gm, '/');
  path = path.replace(/\/+/gm, '/');

  const configPath = `${dir}config.json`;
  const baseConfig: baseConfig = allConfigsCtx.keys().includes(configPath) ? allConfigsCtx(configPath) : {};
  const { name = id, params = '', routes = [], redirected = [] } = baseConfig;

  const mergedRoutes: config[] = routes.map(bind => {
    const sub_dir = `${dir}${bind.dir}`;
    const sub_path = `${path}${params}${bind.path}`;
    return getPagesConfig({ ...bind, dir: sub_dir, path: sub_path });
  });

  const rightOrderRoutes = reorderRoutes(mergedRoutes); 

  return Object.freeze({
    ...baseConfig,
    id,
    name,
    redirected,
    middlewares,
    params,
    props,
    path,
    dir,
    routes: rightOrderRoutes
  });
}

export default getPagesConfig;