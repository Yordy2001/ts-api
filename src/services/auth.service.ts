
import UserModel from "../models/user.model"
import { IUser } from "../interfaces/user.interface";
import { encrypt, verify } from "../utils/bcript.handle";
import { genenerateToken } from '../utils/jwt.handle'

const registerUser = async ({name, email, password, description}:IUser) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "ALREADY_USER"

    const passHash= await encrypt(password)

    const registerNewUser = await UserModel.create({
        name,
        email,
        password:passHash,
        description
    });
    return registerNewUser;
}

const loginUser = async ({email, password}:IUser) => {
    const checkIs = await UserModel.findOne({email})
    if(!checkIs) return "NOT_FOUND_USER"
   
    const passwordHash = checkIs.password
    const isCorrect = await verify(password, passwordHash)
    if(!isCorrect) return "PASSWORD_INCORRECT"

    // Generate Token
    const token = await genenerateToken(checkIs.email)
    const data = {
        token,
        user: checkIs
    }

    return data;
}

const logout = async(req: any) =>{
   req.session.isAuth = false 
}


export { registerUser, loginUser }
