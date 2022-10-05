import { Router } from "express";
import { checkJwt } from "../middleware/jwt.session";
import { checkCoockie } from "../middleware/cookie.session";
import {
  getItems,
  getItem,
  postItem,
  updateItem,
  deleteItem,
} from "../controllers/item";

const router = Router();

/**
 * Post track
 * @swagger
 * paths:
 *  /item/{itemId}:
 *    get:
 *      tags:
 *        - item
 *      summary: ""
 *      requestBody:
 *          description: Return one item.
 *      responses:
 *        '200':
 *          description: Return Data.
 *        '401':
 *          description: PASSWORD_INCORRECT .
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      security:
 *       - ffofofof: []
 */
router.get("/:id", checkJwt, getItem);

/**
 * Post track
 * @swagger
 * paths:
 *  /item/{itemId}:
 *    put:
 *      tags:
 *        - item
 *      summary: ""
 *      requestBody:
 *          description:
 *      responses:
 *        '200':
 *          description: return modified Data.
 *        '404':
 *          description: ITEM_NOT_FOUD.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      security:
 *       - ffofofof: []
 */
router.put("/:id", checkCoockie, checkJwt, updateItem);

/**
 * Post track
 * @swagger
 * paths:
 *   /item/{itemId}:
 *      delete:
 *        tags:
 *          - item
 *     summary: Delete user
 *     description: This can only be done by the logged in user.
 *     operationId: deleteUser
 *     parameters:
 *        - name: username
 *          in: path
 *          description: The name that needs to be deleted
 *          required: true
 *          schema:
 *            type: string
 *     responses:
 *       '400':
 *          description: Invalid username supplied
 *       '404':
 *         description: User not found
 */
router.delete("/:id", checkCoockie, checkJwt, deleteItem);

/**
 * Post track
 * @swagger
 * paths:
 *  /item/:
 *    post:
 *      tags:
 *        - item
 *      summary: "add car"
 *      requestBody:
 *          description: delete selected car
 *      responses:
 *        '200':
 *          description: Data.
 *        '401':
 *          description: AUTHORIZATION_FALIED.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      security:
 *       - ffofofof: []
 */
router.post("/", checkCoockie, checkJwt, postItem);

router.get("/", checkJwt, getItems);

export { router };
