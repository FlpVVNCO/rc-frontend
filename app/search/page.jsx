import { Grid } from "@mui/material";
import dynamic from "next/dynamic";

const BookSearchComponent = dynamic(() => import("../../components/BookList"));

export default async function Search({ searchParams }) {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={6} mt={2}>
        <BookSearchComponent />
      </Grid>
    </Grid>
  );
}
