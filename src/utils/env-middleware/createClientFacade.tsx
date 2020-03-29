type context = {}
type middleware = (ctx: context) => Promise<any>
type clientMiddlewareAdapter = (ctx: context) => (arg: middleware) => any;

const clientMiddlewareAdatpter: clientMiddlewareAdapter = (ctx) => middleware => async () => {
  await middleware(ctx);
}

export default clientMiddlewareAdatpter;