import axios from "./axios";

export const getBooksSearch = (filter) =>
  axios.get(`/searchBook?search=${filter.search}`);

export const getBooks = (filter) => axios.get(`/books?page=${filter.page}`);
export const getBook = (title) => axios.get(`/books?title=${title}`);
export const getCategories = (categorie) =>
  axios.get(`/books?categories=${categorie}`);
export const getAuthors = (author) => axios.get(`/books?authors=${author}`);

export const insertBook = (data) =>
  axios.post(`/book`, { bookId: data.bookId, bookListId: data.listId });

export const getBookList = (userId) => axios.get(`/booklist?userId=${userId}`);

export const voteBook = (bookId, rate) =>
  axios.post("/votebook", { bookId, rate });
