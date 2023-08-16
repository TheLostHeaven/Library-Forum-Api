import express from 'express';
import loginRegisterController from '../controller/loginRegisterController.js';
const router = express.Router();

//para mostrar la página de inicio de sesión
router.get('/login', (req, res) => {
  res.render('login');
});

//para procesar el inicio de sesión
router.post('/login', (req, res) => {
  // Lógica de autenticación aquí
});

// para mostrar la página de registro
router.get('/register', (req, res) => {
  res.render('register');
});

//para procesar el registro
router.post('/register', (req, res) => {
  // Lógica de registro aquí
});

export default router;
