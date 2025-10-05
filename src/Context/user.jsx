import React from "react";
import { login, signUp, logout, statusCheck } from "../service/login.service";
import { toastSuccess, toastError } from "../utils/toaster";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [isloading, setIsLoading] = React.useState(true);

  const navigate = useNavigate();

  const loginApi = async ({ email, password }) => {
    try {
      setIsLoading(true);
      let res = await login({ email, password });
      if (res?.status === 200) {
        setUser(res?.data?.data);
        toastSuccess("Successfully Login");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("error: ", error?.response?.data?.message);
      toastError(
        error?.response?.data?.message ||
          error?.message ||
          "Something Went Wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const signUpApi = async ({ email, name, password }) => {
    try {
      let res = await signUp({ email, name, password });
      console.log(res);
      if (res?.status === 200) {
        toastSuccess("Successfully Signup");
        navigate("/login");
      }
    } catch (error) {
      console.log(error?.response);
      toastError(
        error?.response?.data?.message ||
          error?.message ||
          "Something Went Wrong"
      );
    }
  };

  const logoutApi = async () => {
    try {
      let res = await logout();
      if (res?.status == 200) {
        toastSuccess("Logout successfull");
        navigate("/login");
      }
    } catch (error) {
      console.log("error: ", error?.response);
      toastError(
        error?.response?.data?.message ||
          error?.message ||
          "Something Went Wrong"
      );
    }
  };

  const StatusCheckApi = async () => {
    try {
      setIsLoading(true);
      let res = await statusCheck();
      if (res?.status == 200) {
        setUser(res?.data?.data);
      }
    } catch (error) {
      console.log("error: ", error?.response);
      toastError(
        error?.response?.data?.message ||
          error?.message ||
          "Something Went Wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    StatusCheckApi();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isloading, loginApi, signUpApi, logoutApi }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
