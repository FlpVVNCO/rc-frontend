"use client";
import { createContext, useState, useEffect, useCallback } from "react";
import { getBooks, getBook, getBooksSearch } from "../api/books";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState([]);
  const [errors, setErrors] = useState([]);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getUrlParams = () => {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  };

  // desestructuración del objeto
  const { page, categories, search } = getUrlParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const fetchBooksByFilter = async (filter) => {
    try {
      const res = await getBooks(filter);
      setBooks(res.data);
    } catch (error) {
      console.error(error);
      setErrors(error.message);
    }
  };

  const fetchBookBySearch = async (search) => {
    try {
      const res = await getBooksSearch(search);
      setBooks(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
      setErrors(error.message);
    }
  };

  const getBookByTitle = async (title) => {
    try {
      const res = await getBook(title);
      setBook(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };





  return (
    <BookContext.Provider
      value={{
        books,
        fetchBooksByFilter,
        fetchBookBySearch,
        router,
        pathname,
        searchParams,
        search,
        createQueryString,
        getBookByTitle,
        book,
        page,
        categories,
        errors,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
