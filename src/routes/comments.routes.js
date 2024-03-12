import { Router } from "express";
import { CreateComment, ListCommment } from "../controller/comment.controller.js";

const router = Router();

router.get('/comments',ListCommment);
router.post('/comments',CreateComment);

export default router;