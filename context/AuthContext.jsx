"use client";
import { createContext, useState } from "react";
import { registerRequest } from "../axios/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      setSucces(true);
    } catch (error) {
      setError(true);
      console.log(error.response);
      setErrors(error.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signup,
        errors,
        setErrors,
        error,
        setError,
        succes,
        setSucces,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
