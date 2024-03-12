import { Router } from "express";
import { createBookGenres, deleteBookGenres, updateBookGenres, } from "../controller/books_genres.controller.js";
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from "../controller/book.controller.js";
import { getAnimesByBookId } from "../controller/animes.controller.js";

const router = Router();


router.get('/books/:id/animes', getAnimesByBookId);

//CRUD GENRES BY BOOKID
router.post('/books/:id/genres', createBookGenres);
router.put('/books/:id/genres/:id', updateBookGenres);
router.delete('/books/:id/genres/:id', deleteBookGenres);

//CRUD BOOKS
router.get('/books', getAllBooks);
router.get('/books/:id', getBook);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

export default router;