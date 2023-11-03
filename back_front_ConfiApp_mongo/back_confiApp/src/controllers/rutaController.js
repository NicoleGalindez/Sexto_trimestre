import express from 'express';
import { ruta_MongooseModel } from './rutaModel'; // Asegúrate de importar el modelo de ruta

const router = express.Router();


// Read - Obtener todas las rutas
router.get('/ruta', async (req, res) => {
  try {
    const rutas = await ruta_MongooseModel.find();
    res.status(200).json(rutas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read - Obtener una ruta específica por su ID
router.get('/ruta/:id', async (req, res) => {
  try {
    const ruta = await ruta_MongooseModel.findById(req.params.id);
    if (!ruta) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(200).json(ruta);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Create - Crear una nueva ruta
router.post('/ruta', async (req, res) => {
    try {
      const nuevaRuta = await ruta_MongooseModel.create(req.body);
      res.status(201).json(nuevaRuta);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Update - Actualizar una ruta por su ID
router.put('/ruta/:id', async (req, res) => {
  try {
    const rutaActualizada = await ruta_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!rutaActualizada) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(200).json(rutaActualizada);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete - Eliminar una ruta por su ID
router.delete('/ruta/:id', async (req, res) => {
  try {
    const rutaEliminada = await ruta_MongooseModel.findByIdAndRemove(req.params.id);
    if (!rutaEliminada) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
