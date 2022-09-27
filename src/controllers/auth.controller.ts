import { Response, Request } from "express"
import { registerUser, loginUser } from "../services/auth.service"
import { handleHTTP } from "../utils/error.handle"

type Props = {
    req: Request,
    res: Response 
}

const login = async ( {req, res}:Props) => {
    const { body } = req.body
    try {
        const responseUser = await loginUser(body)

        if(responseUser === "PASSWORD_INCORRECT"){
            return res.status(401).send(responseUser)
        }
        
        req.session = registerUser 
        req.session.isAuth = true
        console.log(req.session);
        res.send(responseUser)
    } catch (error) {
        handleHTTP(res, "ERROR_LOGIN_USER", error);
    }
}

const register = async ( {req, res}:Props) => {
    const { body } = req.body
    try {
        const responseUser = registerUser(body)  
        res.send(responseUser)
    } catch (error) {
        handleHTTP(res, "ERROR_REGISTER_USER", error);
    }
}

export { login, register }
