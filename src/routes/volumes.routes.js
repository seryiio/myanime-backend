import { Router } from "express";
import { CreateVolume, DeleteVolume, ListVolume, ListVolumeByBookId, UpdateVolume } from "../controller/volume.controller.js";

const router = Router();

router.get('/books/:id/volumes', ListVolumeByBookId)

router.get('/volumes', ListVolume)
router.post('/volumes', CreateVolume)
router.put('/volumes/:id', UpdateVolume)
router.delete('/volumes/:id', DeleteVolume)

export default router;