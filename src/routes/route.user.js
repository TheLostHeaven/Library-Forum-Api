// userController.js
import express from 'express';
const router = express.Router();

// Controlador para crear un nuevo usuario
router.post('/usuarios', (req, res) => {
  // Lógica para crear un nuevo usuario
});

router.get('/usuarios', (req, res) => {
  // Lógica para obtener la lista de usuarios
});

//para obtener los detalles de un usuario
router.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para obtener los detalles del usuario con el ID especificado
});

//para actualizar los datos de un usuario
router.put('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para actualizar los datos del usuario con el ID especificado
});

//para eliminar un usuario
router.delete('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  // Lógica para eliminar el usuario con el ID especificado
});

export default router;
