import { Grid } from "@mui/material";
import Paginator from "../../components/Paginator";
import dynamic from "next/dynamic";

const BookListComponent = dynamic(() => import("../../components/BookList"));

const PaginatorComponent = dynamic(() => import("../../components/Paginator"));

export default async function BookListPage() {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={10} xl={6.1} mt={2}>
        <BookListComponent />
        <PaginatorComponent />
      </Grid>
    </Grid>
  );
}
