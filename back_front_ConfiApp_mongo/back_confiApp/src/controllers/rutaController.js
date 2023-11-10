import { rutaActiva_MongooseModel } from './rutaModel';

// Controlador para obtener todas las rutas activas
export const getAllRutasActivas = async (req, res) => {
  try {
    const rutasActivas = await rutaActiva_MongooseModel.find();
    res.status(200).json(rutasActivas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una ruta activa específica por su ID
export const getRutaActivaById = async (req, res) => {
  try {
    const rutaActiva = await rutaActiva_MongooseModel.findById(req.params.id);
    if (!rutaActiva) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(200).json(rutaActiva);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para crear una nueva ruta activa
export const createRutaActiva = async (req, res) => {
  try {
    const nuevaRutaActiva = await rutaActiva_MongooseModel.create(req.body);
    res.status(201).json(nuevaRutaActiva);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para actualizar una ruta activa por su ID
export const updateRutaActiva = async (req, res) => {
  try {
    const rutaActivaActualizada = await rutaActiva_MongooseModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!rutaActivaActualizada) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(200).json(rutaActivaActualizada);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para eliminar una ruta activa por su ID
export const deleteRutaActiva = async (req, res) => {
  try {
    const rutaActivaEliminada = await rutaActiva_MongooseModel.findByIdAndRemove(req.params.id);
    if (!rutaActivaEliminada) {
      res.status(404).json({ error: 'Ruta no encontrada' });
    } else {
      res.status(204).end();
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
