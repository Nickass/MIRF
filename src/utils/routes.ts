import { compile } from 'path-to-regexp';

export interface route {
  id: string;
  path: string;
  props?: {
    [propName: string]: any;
  }
  component: string;
  children?: Array<route>;
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
    component: 'Settings',
    children: [
      {
        id: 'settings_user',
        path: '/user',
        component: 'Settings/User',
        children: [
          {
            id: 'settings_user_auth',
            path: '/auth',
            component: 'Settings/User/Auth',
          }
        ]
      },
    ]
  },
  {
    id: 'words',
    path: '/words/:id',
    component: 'Words',
  }
];

export const getRouteByID = (ID: string, setOfRoutes = routes): route | null => {
  for (let route of setOfRoutes) {
    if (route.id === ID) {
      return route;
    } else if (route.children) {
      const innerRoute = getRouteByID(ID, route.children);

      if (innerRoute) {
        return innerRoute;
      }
    }
  }0

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