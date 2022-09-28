import { Router } from "express";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/jwt.session"
import { checkCoockie } from "../middleware/cookie.session";
import {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} from "../controllers/item";

const router = Router();

router.get("/:id", checkJwt, getItem);
router.put("/:id", checkCoockie, checkJwt, updateItem);
router.delete("/:id", checkCoockie, checkJwt, deleteItem);
router.post("/", checkCoockie, checkJwt, postItem);
router.get("/", checkJwt, getItems);

export { router };
