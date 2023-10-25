import React from "react";
import Link from "next/link";
import { FiMenu, FiSearch } from "react-icons/fi";
import {
  AppBar,
  Autocomplete,
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import BookSearch from "./BookSearch";

const Links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Books",
    route: "/books",
  },
];
const Navbar = () => {
  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <IconButton>
            <FiMenu color="white" />
          </IconButton>
          <Typography
            fontWeight={600}
            color="white"
            sx={{ flexFlow: 1, mr: 2, ml: 2, flexGrow: 1 }}
          >
            ReadConnect
          </Typography>
          <Box sx={{ display: { xs: "none", xl: "block" }, flexGrow: 1 }}>
            <BookSearch />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, mr: 2 }}>
            {Links.map(({ label, route }) => (
              <Typography key={route}>
                <Link href={route}>{label}</Link>
              </Typography>
            ))}
          </Box>

          <Box>
            <Avatar />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
