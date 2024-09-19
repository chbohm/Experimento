import express from 'express';

import  { authRouter } from './protectedRouter';
import { PORT } from '../config/envs';
import { encryptionRouter } from "../controllers/encryption.controller";


const app = express();

app.use(express.json());




app.use('/encryption', encryptionRouter);
//app.use("/protected-route", protectedRouter);
app.use("/auth", authRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

