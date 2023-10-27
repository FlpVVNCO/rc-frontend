"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import BookSearch from "./BookSearch";
import { useSession, signOut } from "next-auth/react";
import DrawerMenu from "./DrawerMenu";

const Links = [
  {
    label: "Books",
    route: "/book",
  },
];
const Navbar = () => {
  const { data: session } = useSession();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <DrawerMenu
        anchor="left"
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
      />
      <AppBar position="fixed" component="nav" elevation={0}>
        <Toolbar>
          <IconButton
            onClick={() => setOpenDrawer(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <FiMenu color="white" />
          </IconButton>
          <Typography
            fontWeight={600}
            color="white"
            component={Link}
            href="/book"
            sx={{ mr: 2, ml: 2, flexGrow: 1, textDecoration: "none" }}
          >
            ReadConnect
          </Typography>

          {session ? (
            <>
              <Box sx={{ display: { xs: "none", xl: "block" }, flexGrow: 1 }}>
                <BookSearch />
              </Box>
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2, mr: 5 }}>
                {Links.map(({ label, route }) => (
                  <Typography
                    sx={{ color: "white" }}
                    fontWeight={600}
                    key={route}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      href={route}
                    >
                      {label}
                    </Link>
                  </Typography>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar sx={{ bgcolor: "secondary.main" }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      component={Link}
                      href="/profile"
                      fontSize={12}
                      sx={{ textDecoration: "none", color: "#000" }}
                    >
                      Profile
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      fontSize={12}
                      onClick={() => signOut()}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
