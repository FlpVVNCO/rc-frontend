"use client";
import { Grid } from "@mui/material";
import BookList from "../../components/BookList";
import { useBook } from "../../hooks/useBook";
import Paginator from "../../components/Paginator";

export default function CategoriesPage({ searchParams }) {
  const { getBookByCategorie, categories } = useBook();

  useEffect(() => {
    getBookByCategorie(categories);
  }, [categories]);

  return (
    <Grid container direction="row" alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={9} mt={2} sx={{ px: { xs: 5, sm: 5, xl: 20 } }}>
        <BookList />
      </Grid>
    </Grid>
  );
}
