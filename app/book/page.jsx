import { Grid } from "@mui/material";
import BookList from "../../components/BookList";
import Paginator from "../../components/Paginator";
export default function BookListPage() {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={10} xl={6.1} mt={2}>
        <BookList />
        <Paginator />
      </Grid>
    </Grid>
  );
}
