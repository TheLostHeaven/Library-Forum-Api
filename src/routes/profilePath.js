import express from 'express';
const router = express.Router();

// Controlador para mostrar el perfil del usuario
router.get('/perfil/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para obtener y mostrar el perfil del usuario con el ID especificado
});

export default router;
