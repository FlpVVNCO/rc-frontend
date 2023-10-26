"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export default function LoginForm() {
  const { register, handleSubmit } = useForm();

  const [error, setError] = useState(false);

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
    else setError(true);
  });

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        p: { xs: 6, sm: 10 },
        border: "3px solid #7590f5",
        borderRadius: "12px",
      }}
    >
      <Typography
        textAlign="center"
        sx={{
          fontWeight: 500,
          fontSize: { xs: 16, sm: 22 },
          color: "primary.main",
          mb: 4,
        }}
      >
        READCONNECT
      </Typography>
      <Typography fontSize={18} fontWeight={500} color="secondary" mb={4}>
        Login
      </Typography>
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

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          color="secondary"
          sx={{ fontSize: 13, color: "white", borderRadius: "12px" }}
          variant="contained"
        >
          SigIn
        </Button>

        <Box
          component={Link}
          href={"/register"}
          sx={{
            textDecoration: "none",
            "&hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography component="span" color="primary" mr={1}>
            Don't have an account?
          </Typography>
          <Typography
            sx={{
              fontSize: 16,

              borderRadius: "12px",
              color: "secondary.main",
            }}
            variant="contained"
          >
            Register here!
          </Typography>
        </Box>
      </Box>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        autoHideDuration={2000}
        open={error}
      >
        <Alert
          onClose={() => setError(false)}
          variant="filled"
          severity="error"
        >
          Error invalid credentials or confirm your email
        </Alert>
      </Snackbar>
    </Box>
  );
}
