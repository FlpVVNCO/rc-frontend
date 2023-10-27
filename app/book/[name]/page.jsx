import { Grid, Toolbar } from "@mui/material";
import dynamic from "next/dynamic";

const BookComponent = dynamic(() => import("../../../components/Book"));
const DescriptionBookComponent = dynamic(() =>
  import("../../../components/DescriptionBook")
);
const ReviewsComponent = dynamic(() => import("../../../components/Reviews"));

const BookPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <BookComponent />
      </Grid>
      <Toolbar />
      <Grid item xs={12}>
        <DescriptionBookComponent />
      </Grid>
      <Toolbar />
      <Grid item xs={12}>
        <ReviewsComponent />
      </Grid>
      <Toolbar />
    </Grid>
  );
};

export default BookPage;
