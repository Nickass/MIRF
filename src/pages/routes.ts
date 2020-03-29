import { compile } from 'path-to-regexp';

export interface route {
  id: string;
  path: string;
  component?: string;
  redirected?: string | string[];
  middleware?: string;
  children?: route[];
  method?: 'get' | 'post';
  props?: {
    [propName: string]: any;
  };
}
export interface routes extends Array<route> {};
export const routes: routes = [
  {
    id: 'home',
    path: '/',
    component: 'Home',
  },
  {
    id: 'settings',
    path: '/settings',
    component: 'Settings'
  },
  {
    id: 'words',
    path: '/words',
    component: 'Words',
  }
];
export default routes;

export const getRouteByID = (ID: string, setOfRoutes = routes): route | null => {
  for (let route of setOfRoutes) {
    if (route.id === ID) {
      return route;
    } else if (route.children) {
      const innerRoute = getRouteByID(ID, route.children);

      if (innerRoute) {
        return {
          ...innerRoute,
          path: `/${route.path}/${innerRoute}`.replace(/\/+/g, '/'),
        };
      }
    }
  }

  return null;
};

export const getPathByRouteID = (ID: string, params: object = {}) => {
  const route = getRouteByID(ID);

  if (route) {
    const toPath = compile(route.path, { encode: encodeURIComponent });
    return toPath(params);
  } else {
    throw new Error('Cannot found route by id: ' + ID);
  }
}

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