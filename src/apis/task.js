import server from './';

export const addTaskResult = async ({customHeaders, payload}) => {
  const {data: response} = await server.post('/tasks', payload, {
    headers: customHeaders,
  });
  return response;
};
