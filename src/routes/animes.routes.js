import { Router } from "express";

import { createAnime, deleteAnime, getAllAnimes, getAnime, getAnimeSeasons, updateAnime } from '../controller/animes.controller.js'
import { createAnimeGenres, deleteAnimeGenres, getAllAnimeGenres, getAnimeGenresByID, updateAnimeGenres } from "../controller/animes_genres.controller.js";

const router = Router();

router.get('/animes', getAllAnimes);
router.post('/animes', createAnime);
router.get('/animes/:id', getAnime);
router.put('/animes/:id', updateAnime);
router.delete('/animes/:id', deleteAnime);


router.get('/animes/:id/seasons', getAnimeSeasons);

router.get('/animesGenres', getAllAnimeGenres);
router.get('/animes/:id/genres', getAnimeGenresByID);
router.post('/animes/:id/genres', createAnimeGenres);
router.put('/animes/:id/genres/:id', updateAnimeGenres);
router.delete('/animes/:id/genres/:id', deleteAnimeGenres);

export default router;