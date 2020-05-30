export default async (path: string, config?: any) => {
  let serverPath: string;
  
  if (process.env.NODE_ENV === 'development') {
    serverPath = `http://${process.env.HMR_SERVER_HOST}:${process.env.HMR_SERVER_PORT}`;
  } else {
    serverPath = `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;    
  }

  return await fetch(`${serverPath}${path}`);
};