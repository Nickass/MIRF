export default async function auth(props: any) {
  // if (ctx.auth.isAuth)  thwrow new Error('Access denied!');
  // await doSomething();
  await new Promise(res => setTimeout(res, 200));
  return props;
}