import { Router } from "express"
import { createEpisode, deleteEpisode, getAllEpisodes, getEpisode, updateEpisode } from "../controller/episodes.controller.js";
import { checkAuth } from "../middleware/auth.js";
import { checkRoleAuth } from "../middleware/roleAuth.js";

const router = new Router();

router.post('/episodes', checkAuth, checkRoleAuth(['ADMIN']), createEpisode)
router.get('/episodes', getAllEpisodes)
router.get('/episodes/:id', getEpisode)
router.put('/episodes/:id', checkAuth, checkRoleAuth(['ADMIN']), updateEpisode)
router.delete('/episodes/:id', checkAuth, checkRoleAuth(['ADMIN']), deleteEpisode)

export default router;