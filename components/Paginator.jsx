"use client";
import { Grid, Pagination } from "@mui/material";
import React from "react";
import { useBook } from "../hooks/useBook";

const Paginator = () => {
  const { books, router, pathname, createQueryString, page } = useBook();

  let countPage = Math.ceil(300 / (books.length || 20));

  const handleChange = (event, value) => {
    router.push(pathname + "?" + createQueryString("page", value));
  };

  return (
    <Grid item justifyContent="center" display="flex" mb={2} mt={2}>
      <Pagination
        count={countPage}
        onChange={handleChange}
        defaultPage={page ? Number(page) : 1}
        color="primary"
      />
    </Grid>
  );
};

export default Paginator;
