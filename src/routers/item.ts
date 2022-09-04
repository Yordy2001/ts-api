import { Router } from "express";
import { logMiddleware } from "../middleware/log";
import { checkJwt } from "../middleware/session"
import {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} from "../controllers/item";

const router = Router();

router.get("/:id", getItem);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
router.post("/", postItem);
router.get("/", checkJwt, getItems);

export { router };
