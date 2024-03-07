import { Router } from "express"
import { createSong, deleteSong, getAllSongsBySeasonId, getAllsongs, updateSong } from "../controller/songs.controller.js";

const router = new Router();

//CRUD SONGS
router.get('/seasons/:id/songs', getAllSongsBySeasonId)
router.post('/seasons/:id/songs', createSong)
router.put('/seasons/:id/songs/:idSong', updateSong)
router.delete('/seasons/:id/songs/:id', deleteSong)

router.get('/songs', getAllsongs)

export default router;