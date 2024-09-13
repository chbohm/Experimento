import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../config/envs';

// Extender la interfaz Request para incluir la propiedad user
interface CustomRequest extends Request {
  user?: any; // Define el tipo de `user` si lo sabes, por ejemplo: `user?: User`
}

export const authenticateJWT = (req: CustomRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1]; // Obtener el token después de "Bearer"

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Token inválido
      }
      req.user = user; // Guardar información del usuario en req
      next();
    });
  } else {
    res.sendStatus(401); // No hay token
  }
};
