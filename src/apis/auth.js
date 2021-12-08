import server from "./";

export const signUpResult = async ({ payload }) => {
  const { data: response } = await server.post("/users", payload);
  return response;
};

export const signInResult = async ({ payload }) => {
  const { data: response } = await server.post("/auth", payload);
  return response;
};

export const thirdPartySignInResult = async ({ payload }) => {
  const { data: response } = await server.post("/auth/third/party", payload);
  return response;
};

export const resendValidationEmailResult = async ({ customHeaders }) => {
  const { data: response } = await server.post(
    "/users/validate/email",
    {},
    {
      headers: customHeaders,
    }
  );
  return response;
};

export const resetPasswordResult = async ({ customHeaders, payload }) => {
  const { data: response } = await server.post(
    "/users/reset/password",
    payload,
    {
      headers: customHeaders,
    }
  );
  return response;
};
