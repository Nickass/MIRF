export default async function profile(ctx: any, cfg: any, props: any) {
  await new Promise(res => setTimeout(res, 1500));
  console.log('Profile middleware has been invoked')
}