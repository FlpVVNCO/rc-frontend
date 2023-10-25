import React from "react";
import Book from "../../../components/Book";
import { Grid, Toolbar } from "@mui/material";
import Reviews from "../../../components/Reviews";
import DescriptionBook from "../../../components/DescriptionBook";

const BookPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Book />
      </Grid>
      <Toolbar />
      <Grid item xs={12}>
        <DescriptionBook />
      </Grid>
      <Toolbar />
      <Grid item xs={12}>
        <Reviews />
      </Grid>
      <Toolbar />
    </Grid>
  );
};

export default BookPage;
