import { Router } from "express"
import { createSong, deleteSong, getAllSongsBySeasonId, getAllsongs, updateSong } from "../controller/songs.controller.js";
import { checkAuth } from "../middleware/auth.js";
import { checkRoleAuth } from "../middleware/roleAuth.js";

const router = new Router();

//CRUD SONGS
router.get('/seasons/:id/songs', getAllSongsBySeasonId)
router.post('/seasons/:id/songs', checkAuth, checkRoleAuth(['ADMIN']), createSong)
router.put('/seasons/:id/songs/:idSong', checkAuth, checkRoleAuth(['ADMIN']), updateSong)
router.delete('/seasons/:id/songs/:id', checkAuth, checkRoleAuth(['ADMIN']), deleteSong)

router.get('/songs', getAllsongs)

export default router;