"use client";
import {
  Alert,
  Box,
  Button,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import Link from "next/link";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    signup,
    errors: registerError,
    error,
    setError,
    success,
    setSuccess,
  } = useAuth();

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
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
      <Typography fontSize={18} fontWeight={500} color="secondary" mb={4}>
        Register
      </Typography>
      <TextField
        fullWidth
        label="name"
        type="text"
        name="name"
        sx={{ mb: 4 }}
        {...register("name", { required: true })}
      />

      <TextField
        fullWidth
        label="email"
        type="email"
        name="email"
        sx={{ mb: 4 }}
        {...register("email", { required: true })}
      />
      <TextField
        fullWidth
        label="password"
        type="password"
        name="password"
        sx={{ mb: 4 }}
        {...register("password", { required: true })}
      />
      {registerError.error && (
        <Alert severity="error">{registerError.error}</Alert>
      )}

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="submit"
          color="secondary"
          sx={{ fontSize: 13, color: "white", borderRadius: "12px" }}
          variant="contained"
        >
          SignUp
        </Button>

        <Box
          component={Link}
          href={"/login"}
          sx={{
            textDecoration: "none",
            "&hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography component="span" color="primary" mr={1}>
            Do you have an account?
          </Typography>
          <Typography
            sx={{
              fontSize: 16,

              borderRadius: "12px",
              color: "secondary.main",
            }}
            variant="contained"
          >
            SignIn
          </Typography>
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
            Email in use!
          </Alert>
        </Snackbar>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          autoHideDuration={2000}
          open={success}
        >
          <Alert
            onClose={() => setSuccess(false)}
            variant="filled"
            severity="success"
          >
            "Registered! Please check your email."
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}
