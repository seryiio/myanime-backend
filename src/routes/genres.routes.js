import { Router } from "express"
import { createGenre, deleteGenre, getAllGenres, getGenre, updateGenre } from "../controller/genres.controller.js"
import { getAllGenreAnimes, getGenreAnimesByID } from "../controller/animes_genres.controller.js";

const router = new Router();

router.post('/genres', createGenre);
router.get('/genres', getAllGenres);
router.get('/genres/:id', getGenre);
router.put('/genres/:id',updateGenre);
router.delete('/genres/:id', deleteGenre);

router.get('/genreanimes', getAllGenreAnimes);
router.get('/genres/:id/animes', getGenreAnimesByID);

export default router;