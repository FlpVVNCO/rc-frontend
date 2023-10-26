"use client";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import BookSearch from "./BookSearch";
import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

const Links = [
  {
    label: "Books",
    route: "/books",
  },
];
const Navbar = () => {
  const { data: session } = useSession();

  // const session = await getServerSession(authOptions);

  // console.log(session);

  return (
    <Box component="header" sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <IconButton sx={{ display: { xs: "block", sm: "none" } }}>
            <FiMenu color="white" />
          </IconButton>
          <Typography
            fontWeight={600}
            color="white"
            component={Link}
            href={"/books"}
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
              <Box>
                <Avatar />
              </Box>
            </>
          ) : null}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
