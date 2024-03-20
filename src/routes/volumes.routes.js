import { Router } from "express";
import { CreateVolume, DeleteVolume, ListVolume, ListVolumeByBookId, UpdateVolume } from "../controller/volume.controller.js";
import { checkAuth } from "../middleware/auth.js";
import { checkRoleAuth } from "../middleware/roleAuth.js";

const router = Router();

router.get('/books/:id/volumes', ListVolumeByBookId)

router.get('/volumes', ListVolume)
router.post('/volumes', checkAuth, checkRoleAuth(['ADMIN']), CreateVolume)
router.put('/volumes/:id', checkAuth, checkRoleAuth(['ADMIN']), UpdateVolume)
router.delete('/volumes/:id', checkAuth, checkRoleAuth(['ADMIN']), DeleteVolume)

export default router;