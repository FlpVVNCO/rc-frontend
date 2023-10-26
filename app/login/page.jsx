import { Box, Grid } from "@mui/material";
import LoginForm from "../../components/LoginForm";

export default function Login() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        justifyContent="center"
        alignItems="center"
        display="flex"
        sx={{ height: "100vh", p: { xs: 2, xl: 0 } }}
      >
        <Box>
          <LoginForm />
        </Box>
      </Grid>
    </Grid>
  );
}
