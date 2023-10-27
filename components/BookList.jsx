"use client";
import { useEffect } from "react";
// custom hook que llama al context
import { useBook } from "../hooks/useBook";
import { Box, Chip, Grid, Rating, Typography } from "@mui/material";
import Image from "next/image";
import FilterList from "./FilterList";
import NextImage from "../public/next.svg";

const BookList = () => {
  const {
    books,
    getBookByTitle,
    router,
    search,
    page,
    categories,
    authors,
    createQueryString,
    ratingBook,
    getBookByAuthors,
    fetchBooksByFilter,
    getBookByCategorie,
  } = useBook();

  const handleBook = (title) => {
    getBookByTitle(title);
    router.push(`/book/${title.replace(/\//g, "")}`);
  };

  const handleBookAuthor = (author) => {
    getBookByAuthors(author);
    router.replace("/search");
    router.push("/search" + "?" + createQueryString("search", author));
  };

  const handleBookCategorie = (categorie) => {
    getBookByCategorie(categorie);
    router.replace("/search");
    router.push("/search" + "?" + createQueryString("search", categorie));
  };

  const handleVote = (id, rate) => {
    ratingBook(id, rate);
  };

  useEffect(() => {
    if (!search) {
      fetchBooksByFilter({ page });
    }
  }, [page]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <FilterList />
      </Grid>
      {books.map((book) => (
        <Grid item key={book.book_id} xs={12} sm={10} xl={6} mt={3}>
          <Box
            sx={{
              display: "flex",
              flexFlow: { xs: "column wrap", sm: "row" },
              justifyContent: { xs: "center", xl: "flex-start" },
              alignItems: { xs: "center", xl: "flex-start" },
              p: 1,
              gap: 2,
            }}
          >
            <Box>
              <Image
                onClick={() => handleBook(book.title)}
                width={200}
                height={250}
                style={{
                  objectFit: "cover",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                }}
                component="img"
                alt={book.title}
                priority
                src={book.thumbnail_url || NextImage}
                onMouseOver={(e) => {
                  e.target.style.transform = "scale(1.1)"; // Escala al 110% en estado de hover
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = "scale(1)"; // Restaurar la escala normal al salir del hover
                }}
              />
            </Box>
            <Box sx={{ overflow: "hidden" }}>
              <Typography
                fontSize={18}
                fontWeight={600}
                sx={{ cursor: "pointer" }}
                onClick={() => handleBook(book.title)}
              >
                {book.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 0.4,
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{ fontSize: { xs: 11, sm: 13 } }}
                  fontWeight={400}
                >
                  by
                </Typography>
                {book.authors.map((author, i) => (
                  <Typography
                    onClick={() => handleBookAuthor(author)}
                    fontWeight={400}
                    key={i}
                    sx={{
                      cursor: "pointer",
                      fontSize: { xs: 11, sm: 13 },
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {author}
                  </Typography>
                ))}
              </Box>

              <Rating
                // value={0}
                size="small"
                onChange={(event, newValue) => {
                  handleVote(book?.book_id, newValue);
                }}
              />

              {book.short_description ? (
                <Typography
                  fontSize={15}
                  fontWeight={400}
                  color="#6f6f6f"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 6,
                  }}
                >
                  {book.short_description}
                </Typography>
              ) : (
                <Typography
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 6,
                  }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Saepe cum ad, impedit alias dolorum libero minus, asperiores
                  voluptatibus distinctio corrupti enim! Aperiam non nobis aut,
                  qui accusantium nesciunt nostrum alias...
                </Typography>
              )}
              {book.categories.map((categorie, i) => (
                <Chip
                  label={categorie}
                  clickable
                  onClick={() => handleBookCategorie(categorie)}
                  key={i}
                  color="secondary"
                  sx={{ mr: 1, color: "white" }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;
