import "dotenv/config";
import express  from "express";
import cookieParser from "cookie-parser"
import cookieSession from "./utils/cookie.handle";
import cors from "cors";
import swaggerUi from "swagger-ui-express"
import swaggerSetup from "./docs/swagger"; 

import { router } from "./routers";
import db from './config/mongo'
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json())
app.use(cookieParser())
app.use(cookieSession)
app.use(router)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSetup))

// Connect database
db()
    .then(()=>{console.log("se connecto a mongo")})
    .catch((err)=> console.log(err))

app.listen(PORT, () => console.log(`app is listen on http://localhost:${PORT}`));
