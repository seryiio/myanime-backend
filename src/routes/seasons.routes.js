import { Router } from "express";
import { createSeason, deleteSeason, getAllSeasons, getSeason, getSeasonEpisodes, updateSeason } from "../controller/seasons.controller.js";

const router = new Router();

router.post('/seasons', createSeason)
router.get('/seasons', getAllSeasons)
router.get('/seasons/:id', getSeason)
router.put('/seasons/:id', updateSeason)
router.delete('/seasons/:id', deleteSeason)

router.get('/seasons/:id/episodes', getSeasonEpisodes)

export default router;
