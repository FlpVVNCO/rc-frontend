import { Grid, Toolbar, Typography } from "@mui/material";
import BookList from "../../components/BookList";
import FilterList from "../../components/FilterList";
import BookSearch from "../../components/BookSearch";
export default async function Search({ searchParams }) {
  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid
        item
        sm={12}
        mt={2}
        sx={{
          px: { xs: 0, sm: 5, xl: 20 },
          background: "pink",
          display: { xs: "none", sm: "block" },
        }}
      >
        <BookSearch />
      </Grid>
      <Grid item xs={12} sm={9} mt={2} sx={{ px: { xs: 5, sm: 5, xl: 20 } }}>
        <BookList />
      </Grid>
      {/* <Grid
        item
        xs={3}
        mt={2}
        sx={{
          px: { xs: 0, sm: 5, xl: 20 },
          background: "green",
          display: { xs: "none", xl: "block" },
        }}
      >
        <Typography>Review</Typography>
      </Grid> */}
    </Grid>
  );
}
