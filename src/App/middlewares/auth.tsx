export default async function auth(...someParams: any[]) {
  // if (ctx.auth.isAuth)  thwrow new Error('Access denied!');
  // await doSomething();
  await new Promise(res => setTimeout(res, 200));
  console.log('Base auth middleware was invoked')
}