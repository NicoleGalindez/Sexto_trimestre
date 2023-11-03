import express from 'express';
import { puntosDeReferencia_MongooseModel } from './rutaModel'; // Asegúrate de importar el modelo de puntosDeReferencia

const router = express.Router();


// Read - Obtener todos los puntos de referencia
router.get('/puntosDeReferencia', async (req, res) => {
  try {
    const puntosDeReferencia = await puntosDeReferencia_MongooseModel.find();
    res.status(200).json(puntosDeReferencia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Read - Obtener un punto de referencia específico por su ID
router.get('/puntosDeReferencia/:id', async (req, res) => {
  try {
    const puntoDeReferencia = await puntosDeReferencia_MongooseModel.findById(req.params.id);
    if (!puntoDeReferencia) {
      res.status(404).json({ error: 'Punto de referencia no encontrado' });
    } else {
      res.status(200).json(puntoDeReferencia);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create - Crear un nuevo punto de referencia
router.post('/puntosDeReferencia', async (req, res) => {
  try {
    const nuevoPuntoDeReferencia = await puntosDeReferencia_MongooseModel.create(req.body);
    res.status(201).json(nuevoPuntoDeReferencia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Update - Actualizar un punto de referencia por su ID
router.put('/puntosDeReferencia/:id', async (req, res) => {
  try {
    const puntoDeReferenciaActualizado = await puntosDeReferencia_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!puntoDeReferenciaActualizado) {
      res.status(404).json({ error: 'Punto de referencia no encontrado' });
    } else {
      res.status(200).json(puntoDeReferenciaActualizado);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete - Eliminar un punto de referencia por su ID
router.delete('/puntosDeReferencia/:id', async (req, res) => {
  try {
    const puntoDeReferenciaEliminado = await puntosDeReferencia_MongooseModel.findByIdAndRemove(req.params.id);
    if (!puntoDeReferenciaEliminado) {
      res.status(404).json({ error: 'Punto de referencia no encontrado' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
