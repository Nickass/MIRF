export default async function auth(ctx: any, cfg: any, props: any) {
  // if (ctx.auth.isAuth)  thwrow new Error('Access denied!');
  // await doSomething();
  await new Promise(res => setTimeout(res, 200));
  console.log('Base auth middleware was invoked')
}