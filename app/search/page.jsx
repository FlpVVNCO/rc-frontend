import { Grid, Toolbar, Typography } from "@mui/material";

import FilterList from "../../components/FilterList";
import BookSearch from "../../components/BookSearch";

import dynamic from "next/dynamic";

const BookSearchComponent = dynamic(() => import("../../components/BookList"));

export default async function Search({ searchParams }) {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={9} mt={2} sx={{ px: { xs: 5, sm: 5, xl: 20 } }}>
        <BookSearchComponent />
      </Grid>
    </Grid>
  );
}
