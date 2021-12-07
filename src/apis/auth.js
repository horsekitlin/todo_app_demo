import server from './';

export const signUpResult = async ({payload}) => {
  const {data: response} = await server.post('/users', payload);
  return response;
};
