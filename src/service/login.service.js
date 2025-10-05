import api from "./interceptor";

const login = (body) => {
  return api.post("/login", body);
};

const signUp = (body) => {
  return api.post("/sign-up", body);
};

const logout = () => {
  return api.get("/logout");
};

const statusCheck = () => {
  return api.get("/me");
};

export { login, logout, statusCheck, signUp };
