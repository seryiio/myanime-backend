import { Router } from "express";

import { createAnime, deleteAnime, getAllAnimes, getAnime, updateAnime } from '../controller/animes.controller.js'
import { createAnimeGenres, deleteAnimeGenres, updateAnimeGenres } from "../controller/animes_genres.controller.js";
import { getLastSeasonsByAnimeId, getLastSeasonsByEachAnime, getSeasonByAnimeId, getSeasonEpisodes, getSeasonsByAnimeId } from "../controller/seasons.controller.js";
import { checkAuth } from "../middleware/auth.js";
import { checkRoleAuth } from "../middleware/roleAuth.js";

const router = Router();



//BUSINESS LOGICAL
router.get('/animes/:id/seasons', getSeasonsByAnimeId);
router.get('/animes/lastseason', getLastSeasonsByEachAnime);
router.get('/animes/:id/lastseason', getLastSeasonsByAnimeId);
router.get('/animes/:id/seasons/:id', getSeasonByAnimeId);
router.get('/animes/:id/seasons/:id/episodes', getSeasonEpisodes)

//CRUD GENRES BY BOOKID
router.post('/animes/:id/genres', createAnimeGenres);
router.put('/animes/:id/genres/:id', updateAnimeGenres);
router.delete('/animes/:id/genres/:id', deleteAnimeGenres);

//CRUD ANIMES
router.get('/animes', getAllAnimes);
router.get('/animes/:id', getAnime);
router.post('/animes', checkAuth, checkRoleAuth(['ADMIN']),createAnime);
router.put('/animes/:id', checkAuth, checkRoleAuth(['ADMIN']), updateAnime);
router.delete('/animes/:id', checkAuth, checkRoleAuth(['ADMIN']), deleteAnime);

export default router;