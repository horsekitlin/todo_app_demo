import server from './';

export const getTasksResult = async ({customHeaders, payload}) => {
  const {data: response} = await server.get('/tasks', {
    headers: customHeaders,
    params: payload,
  });
  return response;
};

export const addTaskResult = async ({customHeaders, payload}) => {
  const {data: response} = await server.post('/tasks', payload, {
    headers: customHeaders,
  });
  return response;
};

export const updateTaskResult = async ({customHeaders, payload: {taskId, ...payload}}) => {
  const {data: response} = await server.put(`/tasks/${taskId}`, payload, {
    headers: customHeaders,
  });
  return response;
};

