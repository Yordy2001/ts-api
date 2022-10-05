import { Response, Request } from "express"
import { registerUser, loginUser, logOutUser } from "../services/auth.service"
import { handleHTTP } from "../utils/error.handle"

type Props = {
    req: Request,
    res: Response 
}

const login = async ( {req, res}:Props ) => {
   
    const { body } = req
    try {
        const responseUser = await loginUser(body)

        if(responseUser === "PASSWORD_INCORRECT"){
            return res.status(401).send(responseUser)
        }
        
        if(req.session){
            req.session.user = responseUser 
            req.session.isAuth = true
        }

        res.status(200).json(responseUser)
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

const logOut = async ( {req, res}:Props ) =>{
    try {
        await logOutUser(req)
        res.status(200)
    } catch (error) {
        handleHTTP(res, "LOGOUT_ERROR", error)
    }
}

export { login, register, logOut }
