import express from 'express';
import { usuario_MongooseModel } from './usuarioModel'; // Asegúrate de importar el modelo de usuario

const router = express.Router();



// Read - Obtener todos los usuarios
router.get('/usuario', async (req, res) => {
  try {
    const usuarios = await usuario_MongooseModel.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read - Obtener un usuario específico por su ID
router.get('/usuario/:id', async (req, res) => {
  try {
    const usuario = await usuario_MongooseModel.findById(req.params.id);
    if (!usuario) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.status(200).json(usuario);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create - Crear un nuevo usuario
router.post('/usuario', async (req, res) => {
  try {
    const nuevoUsuario = await usuario_MongooseModel.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update - Actualizar un usuario por su ID
router.put('/usuario/:id', async (req, res) => {
  try {
    const usuarioActualizado = await usuario_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!usuarioActualizado) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.status(200).json(usuarioActualizado);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete - Eliminar un usuario por su ID
router.delete('/usuario/:id', async (req, res) => {
  try {
    const usuarioEliminado = await usuario_MongooseModel.findByIdAndRemove(req.params.id);
    if (!usuarioEliminado) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
