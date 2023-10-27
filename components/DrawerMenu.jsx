import { Box, Drawer, Toolbar, Typography } from "@mui/material";
import React from "react";
import BookSearch from "./BookSearch";

const DrawerMenu = (props) => {
  return (
    <Drawer {...props}>
      <Box sx={{ bgcolor: "primary.main", height: "100%" }}>
        <Typography textAlign="center" mt={2} color="white" fontWeight={500}>
          Menu
        </Typography>
        <Box width={300} p>
          <BookSearch />
        </Box>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
