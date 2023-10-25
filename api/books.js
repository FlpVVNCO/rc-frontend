import axios from "./axios";

export const getBooksSearch = (filter) =>
  axios.get(`/searchBook?search=${filter.search}`);

export const getBooks = (filter) => axios.get(`/books?page=${filter.page}`);
export const getBook = (title) => axios.get(`/books?title=${title}`);
