"use client";
import {
  Box,
  Button,
  FilledInput,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { FiSearch, FiSend } from "react-icons/fi";

const Reviews = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // navigate("/task");
  });

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8} xl={6}>
        <Box display="flex" justifyContent="start" sx={{ p: { xs: 2, sm: 0 } }}>
          <Box component="form" sx={{ width: "100%" }} onSubmit={onSubmit}>
            <Box
              sx={{
                display: "flex",
                flexFlow: "column wrap",
                alignItems: "end",
                gap: 3,
              }}
            >
              <TextField
                {...register("review", { required: true })}
                sx={{ width: "100%" }}
                multiline
                label="Review"
                name="review"
                placeholder="Enter your review"
                rows={2}
                InputProps={{
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{
                          color: "white",
                          p: 1.2,
                          borderRadius: "10vh",
                          fontWeight: 600,
                        }}
                        startIcon={<FiSend />}
                      >
                        Send
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Reviews;
