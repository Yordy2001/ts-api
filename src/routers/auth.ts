import { Router } from "express";
import { login, register, logOut } from "../controllers/auth.controller";

const router = Router();


/**
 * Post track
 * @swagger
 * paths:
 *  auth/login:
 *    post:
 *      tags:
 *        - users
 *      summary: ""
 *      requestBody:
 *          description: Este endpoint es para listar los usuario totales 
 *      responses:
 *        '200':
 *          description: USER_LOGIN.
 *        '401':
 *          description: PASSWORD_INCORRECT .
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      security:
 *       - ffofofof: []
 */
router.post("/login", login);

/**
 * Post track
 * @swagger
 * paths:
 *  auth/register:
 *    post:
 *      tags:
 *        - users
 *      summary: ""
 *      requestBody:
 *          description: Este endpoint es para listar los usuario totales 
 *      responses:
 *        '200':
 *          description: USER_LOGIN.
 *        '404':
 *          description: USER_NOT_FOUND.
 *        '401':
 *          description: PASSWORD_INCORRECT .
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      security:
 *       - ffofofof: []
 */
router.post("/register", register);

/**
 * Post track
 * @swagger
 * paths:
 *  auth/logout:
 *    post:
 *      tags:
 *        - users
 *      summary: ""
 *      requestBody:
 *          description: Este endpoint es para hacer logout 
 *      responses:
 *        '200':
 *          description: USER_LOGOUT.
 *        '500':
 *          description: SERVER_ERROR.
*/

router.post('/logout', logOut)

export { router };
