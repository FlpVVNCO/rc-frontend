"use client";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { FiPlus, FiMinus } from "react-icons/fi";
import React, { useState } from "react";
import { useBook } from "../hooks/useBook";
import BookSearch from "./BookSearch";

const FilterList = () => {
  const { router, pathname, createQueryString } = useBook();

  const [checked, setChecked] = useState(false);
  const [sort, setSort] = useState("");

  const handleCheck = () => {
    setChecked((prev) => !prev);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setSort(e.target.value);
  };

  const filtersOption = [
    {
      id: 1,
      name: "Categories",
      param: "categories",
    },
    {
      id: 2,
      name: "Authors",
      param: "authors",
    },
    {
      id: 3,
      name: "Title",
      param: "title",
    },
    {
      id: 4,
      name: "Page minimun",
      param: "pageMin",
    },
    {
      id: 5,
      name: "Page maximun",
      param: "pageMax",
    },
    {
      id: 6,
      name: "Start date",
      param: "startDate",
    },
    {
      id: 7,
      name: "End date",
      param: "endDate",
    },
  ];

  const sortBy = [
    {
      id: 1,
      name: "asc",
      value: "asc",
    },
    {
      id: 2,
      name: "desc",
      value: "desc",
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography color="primary" variant="h1" sx={{ fontSize: 18 }}>
          Filters
        </Typography>

        {!checked ? (
          <FiPlus style={{ cursor: "pointer" }} onClick={handleCheck} />
        ) : (
          <FiMinus style={{ cursor: "pointer" }} onClick={handleCheck} />
        )}
      </Box>

      {/* Transición */}
      <Collapse in={checked}>
        <Box display="flex" justifyContent="right" mb={2}>
          <TextField
            sx={{ width: 100 }}
            label="Sort By"
            value={sort}
            select
            size="small"
            onChange={handleChange}
          >
            <MenuItem value="asc">asc</MenuItem>
            <MenuItem value="desc">desc</MenuItem>
          </TextField>
        </Box>
      </Collapse>
      <Divider />
    </Box>
  );
};

export default FilterList;
