import express from 'express';
import User from '../schemas/user.js';

const router = express.Router();
// para iniciar sesión como administrador
router.post('/admin/login', async (req, res) => {
  // Lógica de autenticación de administrador aquí
});

// para eliminar una publicación de un usuario (función de administrador)
router.delete('/admin/posts/:postId', async (req, res) => {
  // Lógica para eliminar la publicación con el ID especificado
});

export default router;
