

// import express, { Request, Response } from 'express';

//     import { authenticateJWT } from '../middlewares/authenticateJWT.middleware';

// const protectedRouter = express.Router();

// // Ruta protegida
// protectedRouter.get('/protected-route', authenticateJWT, (req: Request, res: Response) => {
//   res.json({ message: 'This is a protected route' });
// });

//export default protectedRouter;
import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Simulación de base de datos en memoria
const users: { id: number; username: string; password: string }[] = [];

// Clave secreta para firmar el JWT
const JWT_SECRET = 'clavesecreta';

// Crear un router para agrupar las rutas de autenticación
const authRouter = express.Router();

// Función para generar el token JWT
function generateToken(user: { id: number; username: string }): string {
  return jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    expiresIn: '1h', // Expira en 1 hora
  });
}

// Ruta para registrar un nuevo usuario
authRouter.post('/register', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: users.length + 1, username, password: hashedPassword };
  users.push(newUser);

  const token = generateToken(newUser);
  res.status(201).json({ message: 'User registered successfully', token });
});

// Ruta para iniciar sesión
authRouter.post('/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = users.find(user => user.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ message: 'Invalid username or password' });
  }

  const token = generateToken(user);
  res.json({ message: 'Login successful', token });
});

// Ruta protegida
authRouter.get('/protected', (req: Request, res: Response) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: 'Protected content', decoded });
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

export { authRouter };
