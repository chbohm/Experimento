// Encrypt.ts
import crypto from 'crypto';
import fs from 'fs';
export class Encrypt {
  public key: Buffer;
  public iv: Buffer;
  private algorithm = 'aes-256-cbc';

  constructor() {
    this.key = crypto.randomBytes(32);
    this.iv = crypto.randomBytes(16);
  }

  encrypt(data: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decrypt(encrypted: string): string {
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  saveToFile(filePath: string, encryptedData: string): void {
    const fs = require('fs');
    fs.writeFileSync(filePath, encryptedData);
  }

  static readFromFile(filePath: string): any {
    try {
      const data = fs.readFileSync(filePath, 'utf8');
      return JSON.parse(data); // Asegúrate de que el archivo tenga el formato correcto
    } catch (error) {
      console.error('Error reading from file:', error);
      throw new Error('Failed to read encrypted file');
    }
  }
}



//crear usuario y que devuelva jwt