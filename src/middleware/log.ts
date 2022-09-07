import { NextFunction, Request, Response,  } from "express"
const logMiddleware = (req: Request, res:Response, next:NextFunction) =>{
    try {
        next()
    } catch (error) {
        console.log(error);
        
    }
}

export {logMiddleware}
