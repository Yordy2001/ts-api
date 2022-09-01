import { Router } from "express";
import {readdirSync} from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

// Return just the name of the file 
const clearFileName = (fileName:string) => {
    const file = fileName.split(".").shift();
    return file
}

readdirSync(PATH_ROUTER).filter((fileName)=>{
    const clearName = clearFileName(fileName)
    if(clearName !== 'index'){
        // cargar la ruta con el nombre del archivo
        import(`./${clearName}`).then((moduleRouter) =>{
            router.use(`/${clearName}`, moduleRouter.router)
        })
    }
})

export { router };