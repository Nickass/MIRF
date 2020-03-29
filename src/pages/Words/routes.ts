import { routes } from "../routes";

const localRoutes: routes = [
  {
    id: 'words_get_id',
    path: '/:id',
    redirected: '/',
    middleware: 'getAll',
  },
];

export default localRoutes;