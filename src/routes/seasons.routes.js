import { Router } from "express";
import { createSeason, deleteSeason, getAllSeasons, getLastSeasonsByEachAnime, getSeason, getSeasonByAnimeId, getSeasonEpisodes, getSeasonsByAnimeId, updateSeason } from "../controller/seasons.controller.js";
import { checkAuth } from "../middleware/auth.js";
import { checkRoleAuth } from "../middleware/roleAuth.js";

const router = new Router();

//CRUD SEASONS
router.get('/seasons', getAllSeasons)
router.post('/seasons', checkAuth, checkRoleAuth(['ADMIN']), createSeason)
// router.get('/lastseason', getAllLatestSeasons)
router.get('/seasons/:id', getSeason)
router.put('/seasons/:id', checkAuth, checkRoleAuth(['ADMIN']), updateSeason)
router.delete('/seasons/:id', checkAuth, checkRoleAuth(['ADMIN']), deleteSeason)

export default router;