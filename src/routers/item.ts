import { Request, Response, Router } from "express";
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
router.get("/", getItems);

export { router };
