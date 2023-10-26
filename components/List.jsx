import { Box, Typography } from "@mui/material";
import React from "react";

const List = () => {
  return (
    <Box
      sx={{
        p: { xs: 6, sm: 10 },
        borderRadius: "12px",
        display: "flex",
        flexFlow: "column wrap",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box>
        <Typography>Leidos</Typography>
      </Box>
      <Box>
        <Typography>Por leer</Typography>
      </Box>
    </Box>
  );
};

export default List;
