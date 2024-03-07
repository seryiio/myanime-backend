import { Router } from "express";

import { createAnime, deleteAnime, getAllAnimes, getAnime, updateAnime } from '../controller/animes.controller.js'
import { createAnimeGenres, deleteAnimeGenres, getAnimeGenres, getAnimeGenresByID, updateAnimeGenres } from "../controller/animes_genres.controller.js";
const router = Router();

router.get('/animegenres', getAnimeGenres);
router.get('/animegenres/:id', getAnimeGenresByID);
router.post('/animegenres/:id/genres', createAnimeGenres);
router.put('/animegenres/:id/genres/:id', updateAnimeGenres);
router.delete('/animegenres/:id/genres/:id', deleteAnimeGenres);

//CRUD ANIMES
router.get('/animes', getAllAnimes);
router.post('/animes', createAnime);
router.get('/animes/:id', getAnime);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);

export default router;