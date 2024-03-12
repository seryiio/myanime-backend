import { Router } from "express";
import { createSeason, deleteSeason, getAllSeasons, getLastSeasonsByEachAnime, getSeason, getSeasonByAnimeId, getSeasonEpisodes, getSeasonsByAnimeId, updateSeason } from "../controller/seasons.controller.js";

const router = new Router();

//CRUD SEASONS
router.get('/seasons', getAllSeasons)
router.post('/seasons', createSeason)
// router.get('/lastseason', getAllLatestSeasons)
router.get('/seasons/:id', getSeason)
router.put('/seasons/:id', updateSeason)
router.delete('/seasons/:id', deleteSeason)

export default router;