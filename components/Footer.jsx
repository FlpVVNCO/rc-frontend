import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <Grid container mt={5}>
        <Grid
          item
          xs={12}
          sx={{
            bgcolor: "primary.main",
            display: "flex",
            justifyContent: "center",
            p: 5,
          }}
        >
          <Box>
            <Typography fontWeight={500} fontSize={14} color="white">
              Felipe Vivanco 2023 © ReadConnect
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
