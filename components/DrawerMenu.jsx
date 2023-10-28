import {
  Box,
  Button,
  Divider,
  Drawer,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import BookSearch from "./BookSearch";
import Link from "next/link";

const DrawerMenu = (props) => {
  return (
    <Drawer {...props}>
      <Box
        sx={{
          bgcolor: "primary.main",
          height: "100%",
          display: { sm: "none" },
        }}
      >
        <Typography
          textAlign="center"
          mt={2}
          mb={2}
          color="white"
          fontWeight={800}
        >
          ReadConnect
        </Typography>
        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <Box width={300} p mt={1}>
          <BookSearch />
        </Box>
        <Divider sx={{ bgcolor: "white", mb: 2 }} />
        <Typography
          textAlign="center"
          mt={2}
          mb={2}
          color="white"
          fontWeight={800}
        >
          Menu
        </Typography>
        <Typography
          href="/book"
          component={Link}
          textAlign="left"
          sx={{
            textDecoration: "none",
            ml: 2,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
          color="white"
          fontWeight={600}
        >
          Books
        </Typography>
      </Box>
    </Drawer>
  );
};

export default DrawerMenu;
