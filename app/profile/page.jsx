import { Box, Grid, Toolbar } from "@mui/material";
import Profile from "../../components/Profile";
import List from "../../components/List";

export default function ProfilePage() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Profile />
      </Grid>
      <Grid item xs={12}>
        <List />
      </Grid>
    </Grid>
  );
}
