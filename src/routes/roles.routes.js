import { Router } from "express";
import { createRole, deleteRole, listRole, updateRole } from "../controller/role.controller.js";

const router = Router();

router.get('/role', listRole);
router.post('/role', createRole);
router.put('/role/:id', updateRole);
router.delete('/role/:id', deleteRole);

export default router;