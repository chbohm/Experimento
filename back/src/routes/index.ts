import { Router } from "express";
import usersRouter from "./users.router";

import  { authRouter } from './protectedRouter';
import { PORT } from '../config/envs';
import { encryptionRouter } from "../controllers/encryption.controller";
import express from 'express';


const router = Router();

router.use("/users", usersRouter);


export default router;


const app = express();

app.use(express.json());




app.use('/encryption', encryptionRouter);
//app.use("/protected-route", protectedRouter);
app.use("/auth", authRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

