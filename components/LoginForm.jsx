"use client";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useAuth } from "../hooks/useAuth";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { loginSignIn } = useAuth();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    // loginSignIn(data);
    // router.push("/books");
    const { email, password } = data;
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) return router.push("/books");
  });

  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        fullWidth
        size="small"
        label="email"
        type="email"
        name="email"
        sx={{ mb: 2 }}
        {...register("email", { required: true })}
      />
      <TextField
        color="grey"
        fullWidth
        size="small"
        label="password"
        type="password"
        name="password"
        sx={{ mb: 2 }}
        {...register("password", { required: true })}
      />
      <Button type="submit">Login</Button>
    </Box>
  );
}
