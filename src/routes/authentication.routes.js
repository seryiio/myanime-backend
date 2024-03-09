import { Router } from "express";
import { login, register } from "../controller/authentication.controller.js";

const router = Router();

router.post('/login', login);
router.post('/register', register);

export default router;