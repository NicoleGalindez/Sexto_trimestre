import express from 'express';
import { historialRuta_MongooseModel } from './rutaModel'; // Asegúrate de importar el modelo de historialRuta

const router = express.Router();



// Read - Obtener todos los registros en la colección historialRuta
router.get('/historialRuta', async (req, res) => {
  try {
    const historialRuta = await historialRuta_MongooseModel.find();
    res.status(200).json(historialRuta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read - Obtener un registro específico por su ID
router.get('/historialRuta/:id', async (req, res) => {
  try {
    const historialRuta = await historialRuta_MongooseModel.findById(req.params.id);
    if (!historialRuta) {
      res.status(404).json({ error: 'Registro no encontrado' });
    } else {
      res.status(200).json(historialRuta);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create - Crear un nuevo registro en la colección historialRuta
router.post('/historialRuta', async (req, res) => {
  try {
    const newHistorialRuta = await historialRuta_MongooseModel.create(req.body);
    res.status(201).json(newHistorialRuta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update - Actualizar un registro por su ID
router.put('/historialRuta/:id', async (req, res) => {
  try {
    const updatedHistorialRuta = await historialRuta_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedHistorialRuta) {
      res.status(404).json({ error: 'Registro no encontrado' });
    } else {
      res.status(200).json(updatedHistorialRuta);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete - Eliminar un registro por su ID
router.delete('/historialRuta/:id', async (req, res) => {
  try {
    const deletedHistorialRuta = await historialRuta_MongooseModel.findByIdAndRemove(req.params.id);
    if (!deletedHistorialRuta) {
      res.status(404).json({ error: 'Registro no encontrado' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
