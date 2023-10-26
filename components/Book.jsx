"use client";
import {
  Box,
  Button,
  Chip,
  Grid,
  List,
  Popper,
  Rating,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useBook } from "../hooks/useBook";
import { useParams } from "next/navigation";
import Image from "next/image";
import NextImage from "../public/next.svg";
import {
  FiBook,
  FiBookOpen,
  FiCheck,
  FiEye,
  FiPlus,
  FiStar,
} from "react-icons/fi";
import { useSession } from "next-auth/react";

const Book = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [click, setClick] = useState(false);


  const { book, getBookByTitle, getBookListByUser, list, addBookToList } =
    useBook();

  const { data: session } = useSession();

  const params = useParams();

  const { name } = params;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
    getBookListByUser(session?.user.id);
    setClick(!click);
  };

  const addToList = (listId) => {

    addBookToList(listId, book[0].book_id);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  useEffect(() => {
    getBookByTitle(name);
  }, [name]);

  

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "center",
            gap: 2,
            boxShadow: "0 8px 12px rgba(18,18,18,.16)",
          }}
        >
          <Box mt={5} mb={2}>
            <Image
              width={250}
              height={300}
              style={{
                objectFit: "cover",
                borderRadius: "12px",
              }}
              component="img"
              priority
              alt={book[0]?.title.replace(/\//g, "") || "hola"}
              src={book[0]?.thumbnail_url || NextImage}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexFlow: "column wrap",
              p: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              sx={{
                fontSize: 32,
                fontWeight: 700,
                mt: { xs: 0, sm: 3, xl: 10 },
              }}
            >
              {book[0]?.title}
            </Typography>

            <Rating value={book[0]?.rating ?? 0} readOnly />

            <List
              sx={{
                display: "flex",
                flewFlow: "row wrap",
                justifyContent: { xs: "center", sm: "start" },
                gap: 2,
                mt: 1,
              }}
            >
              <Chip
                icon={<FiEye color="white" />}
                label="View: 0"
                sx={{ bgcolor: "primary.main", color: "white" }}
              />

              <Chip
                icon={<FiStar color="white" />}
                label="Votes: 0"
                sx={{ bgcolor: "primary.main", color: "white" }}
              />

              <Chip
                icon={<FiBook color="white" />}
                label={`Page: ${book[0]?.page_count}`}
                sx={{ bgcolor: "primary.main", color: "white" }}
              />
            </List>

            <Box
              sx={{
                display: "flex",
                gap: 0.5,
                mt: { xs: 3, sm: 3 },
                mb: { xs: 5, sm: 5, xl: 0 },
              }}
            >
              <Button
                variant="contained"
                fullWidth
                color="secondary"
                onClick={handleClick}
                startIcon={<FiBookOpen />}
                sx={{
                  borderRadius: "50vh 0 0 50vh",
                  color: "white",
                  fontSize: 14,
                  fontWeight: 600,
                  p: 1,
                }}
              >
                Add to
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  borderRadius: "0 50vh 50vh 0",
                  color: "white",
                  fontWeight: 600,
                }}
              >
                <FiPlus fontSize={24} fontWeight={500} />
              </Button>

              <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ display: "flex" }}>
                  {list.map((list) => (
                    <Box
                      key={list.book_list_id}
                      sx={{
                        borderRadius: "12px",
                        p: 1,
                      }}
                    >
                      <Chip
                        color={
                          list.name_list === click ? "primary" : "secondary"
                        }
                        sx={{ color: "white", fontSize: 14 }}
                        onClick={() =>
                          addToList(list.book_list_id, setClick(list.name_list))
                        }
                        label={list.name_list}
                        icon={
                          list.name_list === click ? (
                            <FiCheck fontSize={20} />
                          ) : (
                            <FiPlus fontSize={20} />
                          )
                        }
                        clickable
                      />
                    </Box>
                  ))}
                </Box>
              </Popper>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Book;
