"use client";
import { createContext, useState } from "react";
import { registerRequest, profileRequest } from "../axios/auth";

import { useRouter } from "next/navigation";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);
  const [error, setError] = useState(false);
  const router = useRouter();

  const signup = async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      router.push("/login");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
