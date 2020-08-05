export default async function profile(ctx: any, cfg: any, props: any) {
  console.log('Profile middleware is been invoked')
  await new Promise(res => setTimeout(res, 1500));
  console.log('Profile middleware has been invoked')
}