"use client";
import { Box, Button, TextField } from "@mui/material";
import { useSession, signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();

  const router = useRouter();

  console.log("user", session?.user);

  const onSubmit = handleSubmit(async (data) => {
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
