"use client";
import { createContext, useState } from "react";
import { registerRequest } from "../axios/auth";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const router = useRouter();

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
    } catch (error) {
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  // const logout = async () => {
  //   try {
  //     await logoutRequest();
  //     setIsAuthenticated(false);
  //     setIsAdmin(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const getProfile = async (user) => {
  //   try {
  //     const res = await profileRequest(user);
  //     console.log(res);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        signup,
        errors,
        setErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
