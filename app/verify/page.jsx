import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { HiRocketLaunch } from "react-icons/hi2";

export default function VerifyPage() {
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
        <Box
          sx={{
            p: { xs: 6, sm: 10 },
            border: "3px solid #7590f5",
            borderRadius: "12px",
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 16 },
              fontWeight: 600,
              color: "secondary.main",
              mb: 2,
            }}
          >
            YOUR ACCOUNT HAS BEEN SUCCESSFULLY VERIFIED!!
            <HiRocketLaunch />
          </Typography>
          <Button
            sx={{ width: "20%", color: "white" }}
            color="secondary"
            component={Link}
            href="/login"
            variant="contained"
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
