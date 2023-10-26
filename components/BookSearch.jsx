"use client";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useEffect } from "react";
import { useBook } from "../hooks/useBook";
import { useForm } from "react-hook-form";
import { FiSearch } from "react-icons/fi";

const BookSearch = () => {
  const { router, createQueryString, pathname, fetchBookBySearch, search } =
    useBook();

  useEffect(() => {
    if (search) {
      fetchBookBySearch({ search });
    }
  }, [search]);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    router.replace("/search");
    router.push("/search" + "?" + createQueryString("search", data.search));
  });

  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        size="small"
        placeholder="Search"
        {...register("search")}
        InputProps={{
          type: "search",
          sx: { borderRadius: 12, fontSize: 14, bgcolor: "#fff", width: 400 },
          startAdornment: (
            <InputAdornment position="start">
              <FiSearch />
            </InputAdornment>
          ),
        }}
      />
      <Button type="submit">Search</Button>
    </Box>
  );
};

export default BookSearch;
