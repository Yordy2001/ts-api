import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send("se guardan los items")
})

export {router};