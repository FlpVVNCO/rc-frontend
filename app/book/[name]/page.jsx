import { Grid, Toolbar } from "@mui/material";
import Book from "../../../components/Book";
import DescriptionBook from "../../../components/DescriptionBook";
import Reviews from "../../../components/Reviews";

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
