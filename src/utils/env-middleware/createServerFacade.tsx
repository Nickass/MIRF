import { NextFunction } from "express";

type context = {}
type middleware = (ctx: context) => Promise<any>
type serverMiddlewareAdapter = (ctx: context, next: NextFunction) => (arg: middleware) => any;

const serverMiddlewareAdatpter: serverMiddlewareAdapter = (ctx, next) => middleware => async () => {
  try {
    await middleware(ctx);
  } catch (err) {
    console.log('error: ', err)
  }
  next();
}

export default serverMiddlewareAdatpter;