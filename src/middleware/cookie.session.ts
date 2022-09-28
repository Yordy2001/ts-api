import { Response, NextFunction } from "express";
import { RequestExt } from "../interfaces/req-ext.inteface";

const checkCoockie = async (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    if(!req.session?.isAuth){
        res.status(401).send("USER_UNNAUTORIZE")
    }
    next();
  } catch (error) {
    res.status(400).send("INVALID_SESSION");
  }
};

export { checkCoockie };
