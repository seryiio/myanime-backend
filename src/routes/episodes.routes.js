import { Router } from "express"
import { createEpisode, deleteEpisode, getAllEpisodes, getEpisode, updateEpisode } from "../controller/episodes.controller.js";

const router = new Router();

router.post('/episodes', createEpisode)
router.get('/episodes', getAllEpisodes)
router.get('/episodes/:id', getEpisode)
router.put('/episodes/:id', updateEpisode)
router.delete('/episodes/:id', deleteEpisode)

export default router;