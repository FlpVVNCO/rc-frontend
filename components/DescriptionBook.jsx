"use client";
import { Box, Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useBook } from "../hooks/useBook";

const DescriptionBook = () => {
  const { book } = useBook();

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={8} xl={6}>
        <Box
          sx={{ display: "flex", flexFlow: "column wrap", p: { xs: 2, sm: 0 } }}
        >
          <Box mb={3}>
            <Typography
              variant="h5"
              sx={{ fontSize: 18, fontWeight: 600, mb: 2 }}
            >
              Categories
            </Typography>

            {book[0]?.categories.map((categorie, i) => (
              <Chip
                color="primary"
                sx={{ color: "white", mr: 1 }}
                key={i}
                label={categorie}
              />
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
          <Typography
            variant="h5"
            sx={{ fontSize: 18, fontWeight: 600, mb: 2 }}
          >
            Description
          </Typography>

          <Typography textAlign="justify">
            {book[0]?.long_description}
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <Box>
            <Typography
              variant="h5"
              sx={{ fontSize: 18, fontWeight: 600, mb: 2, mt: 2 }}
            >
              Authors
            </Typography>
            {book[0]?.authors.map((author, i) => (
              <Chip
                color="secondary"
                sx={{ color: "white", mr: 1 }}
                key={i}
                label={author}
              />
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DescriptionBook;
