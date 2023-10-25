"use client";
import { createContext, useState, useEffect } from "react";
import {
  registerRequest,
  loginRequest,
  verifyTokenRequest,
  logoutRequest,
  profileRequest,
} from "../api/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // cambiar estos estados redundantes y ubicarlos es un solo state
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setUser(res.data);
      // setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response);
      // setErrors(error.response.data);
    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      // if (res.data.username.includes("admin")) {
      //   setIsAdmin(true);
      // } else {
      //   setIsAdmin(false);
      // }
      // setIsAuthenticated(true);
      // setUser(res.data);
      console.log(res.data);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors([error.response.data.message]);
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

  // useEffect(() => {
  //   if (errors.length > 0) {
  //     const timer = setTimeout(() => {
  //       setErrors([]);
  //     }, 3000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [errors]);

  // useEffect(() => {
  //   async function checkLogin() {
  //     const cookies = Cookies.get();
  //     console.log("desde auth", cookies.token);

  //     // if (!cookies.token) {
  //     //   setIsAuthenticated(false);
  //     //   setLoading(false);
  //     //   setIsAdmin(false);
  //     //   return setUser(null);
  //     // }
  //     // try {
  //     //   const res = await verifyTokenRequest(cookies.token);
  //     //   if (!res.data) {
  //     //     setIsAuthenticated(false);
  //     //     setLoading(false);
  //     //     setIsAdmin(false);
  //     //     return;
  //     //   }
  //     //   if (res.data.username.includes("admin")) {
  //     //     setIsAdmin(true);
  //     //   }
  //     //   setIsAuthenticated(true);
  //     //   setUser(res.data);
  //     //   setLoading(false);
  //     // } catch (error) {
  //     //   setIsAuthenticated(false);
  //     //   setIsAdmin(false);
  //     //   setUser(null);
  //     //   setLoading(false);
  //     // }
  //   }
  //   checkLogin();
  // }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
