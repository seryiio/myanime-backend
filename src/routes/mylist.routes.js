import { Router } from "express";
import { CreateMyList, DeleteMyList, ListMyList, ListMyListByUserId, UpdateMyList } from "../controller/mylist.controller.js";
import { checkAuth } from "../middleware/auth.js";

const router = Router();

router.get('/mylist', ListMyList);
router.get('/mylist/:id', ListMyListByUserId);
router.post('/mylist', CreateMyList);
router.put('/mylist/:id', UpdateMyList);
router.delete('/mylist/:id', DeleteMyList);

export default router;