import { Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/req-ext.inteface";

const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const userJwt = req.headers.authorization || null;
    // Retorna la parte del token luego del espacio
    const jwt = userJwt?.split(" ").pop();
    const isOk = await verifyToken(`${jwt}`) as {id:string};
    if (!isOk) {
      res.status(401).send("INVALID_TOKEN");
    }
    req.user = isOk;
    next();
  } catch (error) {
    res.status(400).send("INVALID_SESSION");
  }
};

export { checkJwt };
