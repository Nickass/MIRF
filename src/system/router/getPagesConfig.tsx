export interface nakedRoute {
  id: string;
  path: string;
  component: string;
  middleware?: string;
  props?: {
    [propName: string]: any;
  };
}
export interface route extends nakedRoute {
  chunkName: string;
  redirected?: string | string[];
  config: config | null;
}
export interface routes extends Array<route> {};
export interface config {
  routes?: routes;
}

// TODO: separate file
// TODO: implement more options
// {
// 	component,
// 	name,
// 	path,
//  children
//  meta
//  props
// 	alias,
//  chunkName
//  redirect
//  caseSensitive
//  pathToRegexpOptions
// };	

function joinPath(...paths: string[]) {
  return paths.reduce((acc, curr) => {
    const prev = acc;
    const next = curr;
    return prev + next;
  }, '')
}

export const allConfigsCtx = require.context('~/pages/', true, /config/);

export const getPagesConfig = (rootPath: string): config | null => {
  try {
    const configPath = `${rootPath}config.json`;
    const config: config = allConfigsCtx(configPath);
    const rawRoutes = config.routes || [];
  
    const routes = rawRoutes.map(route => {
      const chunkPath = joinPath(rootPath, route.component);
      const config = getPagesConfig(chunkPath);

      return { ...route, config, chunkName: chunkPath.replace(/^\.\//, '') };
    });
  
    return { ...config, routes }
  } catch (err) {
    return null;
  }
}

export default getPagesConfig;