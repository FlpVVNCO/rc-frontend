"use client";
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import BookList from "../../components/BookList";
import FilterList from "../../components/FilterList";
import Paginator from "../../components/Paginator";
export default function Books() {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={10} xl={6.1} mt={2} sx={{}}>
        <BookList />
        <Paginator />
      </Grid>
    </Grid>
  );
}
