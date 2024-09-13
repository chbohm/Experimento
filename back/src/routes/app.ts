import express from 'express';
import { encryptionRouter } from "../controllers/encryption.controller";


const app = express();
const port = 3001;

app.use(express.json());




app.use('/encryption', encryptionRouter);

