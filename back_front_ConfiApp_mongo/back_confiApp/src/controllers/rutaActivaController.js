import express from 'express';
import { rutaActiva_MongooseModel } from './rutaModel'; // Asegúrate de importar el modelo de rutaActiva

const router = express.Router();


// Read - Obtener todas las rutas activas
router.get('/rutaActiva', async (req, res) => {
  try {
    const rutasActivas = await rutaActiva_MongooseModel.find();
    res.status(200).json(rutasActivas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Read - Obtener una ruta activa específica por su ID
router.get('/rutaActiva/:id', async (req, res) => {
  try {
    const rutaActiva = await rutaActiva_MongooseModel.findById(req.params.id);
    if (!rutaActiva) {
      res.status(404).json({ error: 'Ruta activa no encontrada' });
    } else {
      res.status(200).json(rutaActiva);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create - Crear una nueva ruta activa
router.post('/rutaActiva', async (req, res) => {
  try {
    const nuevaRutaActiva = await rutaActiva_MongooseModel.create(req.body);
    res.status(201).json(nuevaRutaActiva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update - Actualizar una ruta activa por su ID
router.put('/rutaActiva/:id', async (req, res) => {
  try {
    const rutaActivaActualizada = await rutaActiva_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!rutaActivaActualizada) {
      res.status(404).json({ error: 'Ruta activa no encontrada' });
    } else {
      res.status(200).json(rutaActivaActualizada);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete - Eliminar una ruta activa por su ID
router.delete('/rutaActiva/:id', async (req, res) => {
  try {
    const rutaActivaEliminada = await rutaActiva_MongooseModel.findByIdAndRemove(req.params.id);
    if (!rutaActivaEliminada) {
      res.status(404).json({ error: 'Ruta activa no encontrada' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
