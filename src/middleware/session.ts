import { Response, Request, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userJwt = req.headers.authorization || null;
    const jwt = userJwt?.split(" ").pop();
    const isOk = verifyToken(`${jwt}`);
    if(!isOk) {
        res.status(401).send('INVALID_TOKEN')
    }
    next();
  } catch (error) {
    res.status(400).send("INVALID_SESSION");
  }
};

export {checkJwt}
