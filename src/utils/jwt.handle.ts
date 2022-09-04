import {sign, verify} from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || "secret.01";

const genenerateToken = async (id:string) => {
   const jwt = sign({id}, JWT_SECRET,{
    expiresIn:'8h'
   });
   return jwt 
}

const verifyToken =  async (jwt:string) => {
    const isOk = verify(jwt, JWT_SECRET)
    return isOk
}

export { genenerateToken, verifyToken }
