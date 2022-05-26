export const LoginStart = (doctorCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (doctor) => ({
  type: "LOGIN_SUCCESS",
  payload: doctor,
});

export const LoginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const Logout = () => ({
  type: "LOGOUT",
});
