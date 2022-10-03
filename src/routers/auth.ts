import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const router = Router();

/**
 * Post track
 * @openapi
 * paths:
 *  /login:
 *    post:
 *      tags:
 *        - users
 *      summary: "Listar usuario"
 *      requestBody:
 *          description: Este endpoint es para listar los usuario totales 
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      security:
 *       - ffofofof: []
 */
router.post("/login", login);


router.post("/register", register);

export { router };
