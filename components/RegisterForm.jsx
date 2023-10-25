"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signup } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <Box component="form" onSubmit={onSubmit}>
      <Typography fontWeight={400} color="#FFF" mb={2}>
        Username
      </Typography>
      <TextField
        fullWidth
        label="name"
        type="text"
        name="name"
        {...register("name", { required: true })}
      />
      {/* {errors.username && <Alert severity="error">Username is required</Alert>} */}
      <Typography fontWeight={400} color="#FFF" mb={2}>
        Email
      </Typography>
      <TextField
        fullWidth
        label="email"
        type="email"
        name="email"
        {...register("email", { required: true })}
      />
      {/* {errors.email && <Alert severity="error">Email is required</Alert>} */}
      <Typography fontWeight={400} color="#FFF" mb={2}>
        Password
      </Typography>
      <TextField
        fullWidth
        label="password"
        type="password"
        name="password"
        {...register("password", { required: true })}
      />
      {/* {errors.password && <Alert severity="error">Password is required</Alert>} */}

      <Button type="submit">Register</Button>
    </Box>
  );
}
