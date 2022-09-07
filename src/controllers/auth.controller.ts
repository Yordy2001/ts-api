import { Response, Request } from "express"
import { registerUser, loginUser } from "../services/auth.service"
import { handleHTTP } from "../utils/error.handle"

const login = async ( {body}:Request, res:Response ) => {
    try {
        const responseUser = await loginUser(body)

        if(responseUser === "PASSWORD_INCORRECT"){
            res.status(401).send(responseUser)
        }
        
        res.send(responseUser)
    } catch (error) {
        handleHTTP(res, "ERROR_LOGIN_USER", error);
    }
}

const register = async ( {body}:Request, res:Response ) => {
    try {
        const responseUser = registerUser(body)  
        res.send(responseUser)
    } catch (error) {
        handleHTTP(res, "ERROR_REGISTER_USER", error);
    }
}

export { login, register }
