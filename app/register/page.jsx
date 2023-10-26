import { Box, Grid } from "@mui/material";
import RegisterForm from "../../components/RegisterForm";

export default function Register() {
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
          <RegisterForm />
        </Box>
      </Grid>
    </Grid>
  );
}
