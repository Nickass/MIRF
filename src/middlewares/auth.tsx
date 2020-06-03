export default async function auth(ctx: any, cfg: any, props: any) {
  // if (ctx.auth.isAuth)  thwrow new Error('Access denied!');
  // await doSomething();
  await new Promise(res => setTimeout(res, 1200));
  console.log('auth middleware is invoked')
}