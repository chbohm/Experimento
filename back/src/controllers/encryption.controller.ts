
import express, { Request, Response } from 'express';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { Encrypt } from "../services/encrypt.service"
const encrypt = new Encrypt(); // Crear una instancia de Encrypt
// Endpoint para encriptar y guardar datos
const encryptionRouter = express.Router();

encryptionRouter.post('/encrypt', (req: Request, res: Response) => {
    const { text } = req.body;
  
    if (!text) {
      return res.status(400).json({ message: 'You have not entered any text' });
    }
  
    try {
      const algorithm = 'aes-256-cbc';
      const key = crypto.randomBytes(32);
      const iv = crypto.randomBytes(16);
  
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      let encrypted = cipher.update(text, 'utf8', 'hex');
      encrypted += cipher.final('hex');
  
      const filePath = path.join(__dirname, `encrypted_${Date.now()}.txt`);
      fs.writeFile(filePath, JSON.stringify({ iv: iv.toString('hex'), key: key.toString('hex'), data: encrypted }), (err) => {
        if (err) {
          return res.status(500).json({ message: 'Failed to save the file' });
        }
  
        res.json({ message: 'Text encrypted and saved successfully', filePath });
      });
    } catch (error) {
      res.status(500).json({ message: 'Encryption failed', error: error});
    }
  });
  
  encryptionRouter.post('/encrypt-body', (req: Request, res: Response) => {
    const { id, data } = req.body;
  
    if (!id || !data) {
      return res.status(400).json({ message: 'ID and data are required' });
    }
  
    try {
      const dataString = JSON.stringify(data);
      const encrypted = encrypt.encrypt(dataString);
      
      const filePath = path.join(__dirname, `encryptedBody_${id}.txt`);
      encrypt.saveToFile(filePath, encrypted);
  
      res.json({ message: 'Body encrypted and saved successfully', filePath });
    } catch (error) {
      res.status(500).json({ message: 'Encryption failed', error: error });
    }
  });
  
  // Endpoint para obtener información encriptada
  encryptionRouter.get('/decrypt/:id', (req: Request, res: Response) => {
    const { id } = req.params;
  
    const filePath = path.join(__dirname, `encrypted_${id}.txt`);
  
    try {
      const { iv, key, data: encrypted } = Encrypt.readFromFile(filePath);
  
      const decryptor = new Encrypt();
      decryptor.key = Buffer.from(key, 'hex');
      decryptor.iv = Buffer.from(iv, 'hex');
      const decrypted = decryptor.decrypt(encrypted);
  
      res.json({ data: JSON.parse(decrypted) });
    } catch (error) {
      res.status(500).json({ message: 'Decryption failed', error: error });
    }
  });
  
  export { encryptionRouter };
