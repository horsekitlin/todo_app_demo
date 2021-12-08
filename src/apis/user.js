import server from './';

export const getUserResult = async ({customHeaders}) => {
  const {data: response} = await server.get('/users', {
    headers: customHeaders,
  });
  return response;
};
