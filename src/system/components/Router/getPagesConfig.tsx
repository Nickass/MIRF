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
  }); // TODO: remove comment if this solution doesn't help -> .sort((a, b) => b.path.length - a.path.length);

  return {
    ...baseConfig,
    id,
    name,
    redirected,
    middlewares,
    params,
    props,
    path,
    dir,
    routes: mergedRoutes
  };
}

export default getPagesConfig;