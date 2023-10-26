import axios from "./axios";

export const getBooksSearch = (filter) =>
  axios.get(`/searchBook?search=${filter.search}`);

export const getBooks = (filter) => axios.get(`/books?page=${filter.page}`);
export const getBook = (title) => axios.get(`/books?title=${title}`);

export const insertBook = (data) =>
  axios.post(`/book`, { bookId: data.bookId, bookListId: data.listId });

export const getBookList = (userId) => axios.get(`/booklist?userId=${userId}`);

// , {
//   headers: {
//     Authorization: "Bearer token123",
//     "Content-Type": "application/json",
//   },
// }
