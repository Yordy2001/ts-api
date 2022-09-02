import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routers";
import db from './config/mongo'
const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(router)
db().then(()=>{console.log("se connecto a mongo")})

app.listen(PORT, () => console.log(`app is listen on port ${PORT}`));
