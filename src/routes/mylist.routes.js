import { Router } from "express";
import { CreateMyList, DeleteMyList, ListMyList, UpdateMyList } from "../controller/mylist.controller.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

router.get('/mylist', checkAuth, ListMyList);
router.post('/mylist', CreateMyList);
router.put('/mylist/:id', UpdateMyList);
router.delete('/mylist/:id', DeleteMyList);

export default router;