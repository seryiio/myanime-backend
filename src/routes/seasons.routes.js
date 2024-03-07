import { Router } from "express";
import { createSeason, deleteSeason, getAllSeasons, getLastSeasonsByEachAnime, getSeason, getSeasonByAnimeId, getSeasonEpisodes, getSeasonsByAnimeId, updateSeason } from "../controller/seasons.controller.js";

const router = new Router();


//BUSINESS LOGICAL
router.get('/animegenres/:id/seasons', getSeasonsByAnimeId);
router.get('/lastseason', getLastSeasonsByEachAnime);
router.get('/animegenres/:id/seasons/:id', getSeasonByAnimeId);
router.get('/animegenres/:id/seasons/:id/episodes', getSeasonEpisodes)

//CRUD SEASONS
router.get('/seasons', getAllSeasons)
router.post('/seasons', createSeason)
// router.get('/lastseason', getAllLatestSeasons)
router.get('/seasons/:id', getSeason)
router.put('/seasons/:id', updateSeason)
router.delete('/seasons/:id', deleteSeason)

export default router;