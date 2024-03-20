import { Router } from "express";
import { createRole, deleteRole, listRole, updateRole } from "../controller/role.controller.js";
import { checkAuth } from "../middleware/auth.js";
import { checkRoleAuth } from "../middleware/roleAuth.js";

const router = Router();

router.get('/role', listRole);
router.post('/role', checkAuth, checkRoleAuth(['ADMIN']), createRole);
router.put('/role/:id', checkAuth, checkRoleAuth(['ADMIN']), updateRole);
router.delete('/role/:id', checkAuth, checkRoleAuth(['ADMIN']), deleteRole);

export default router;