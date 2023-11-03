import { puntosDeReferencia_MongooseModel } from './rutaModel';

// Controlador para obtener todos los puntos de referencia
export const getAllPuntosDeReferencia = async (req, res) => {
  try {
    const puntosDeReferencia = await puntosDeReferencia_MongooseModel.find();
    res.status(200).json(puntosDeReferencia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener un punto de referencia específico por su ID
export const getPuntoDeReferenciaById = async (req, res) => {
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
};

// Controlador para crear un nuevo punto de referencia
export const createPuntoDeReferencia = async (req, res) => {
  try {
    const nuevoPuntoDeReferencia = await puntosDeReferencia_MongooseModel.create(req.body);
    res.status(201).json(nuevoPuntoDeReferencia);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para actualizar un punto de referencia por su ID
export const updatePuntoDeReferencia = async (req, res) => {
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
};

// Controlador para eliminar un punto de referencia por su ID
export const deletePuntoDeReferencia = async (req, res) => {
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
};
