"use client";
import { Grid } from "@mui/material";
import BookList from "../../components/BookList";
import { useEffect } from "react";
import { useBook } from "../../hooks/useBook";
import Paginator from "../../components/Paginator";

export default function AuthorsPage({ searchParams }) {
  const { getBookByAuthors, authors } = useBook();

  useEffect(() => {
    getBookByAuthors(authors);
  }, [authors]);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={9} mt={2} sx={{ px: { xs: 5, sm: 5, xl: 20 } }}>
        <BookList />
      </Grid>
    </Grid>
  );
}
