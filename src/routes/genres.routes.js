import { Router } from "express"
import { createGenre, deleteGenre, getAllGenres, getGenre, updateGenre } from "../controller/genres.controller.js"
import { getAllGenreBooks, getGenreBooksByID } from "../controller/books_genres.controller.js";
import { getAnimesByGenreId, getAnimesByGenres } from "../controller/animes_genres.controller.js";

const router = new Router();

//GET ALL BOOKS BY EACH GENRE
router.get('/genres/books', getAllGenreBooks);
router.get('/genres/:id/books', getGenreBooksByID);

//GET ALL ANIMES BY EACH GENRE
router.get('/genres/animes', getAnimesByGenres);
router.get('/genres/:id/animes', getAnimesByGenreId);

//CRUD GENRES
router.post('/genres', createGenre);
router.get('/genres', getAllGenres);
router.get('/genres/:id', getGenre);
router.put('/genres/:id', updateGenre);
router.delete('/genres/:id', deleteGenre);

export default router;