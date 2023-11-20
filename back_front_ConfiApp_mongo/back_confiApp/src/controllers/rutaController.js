import { ruta_MongooseModel } from './rutaModel';

// Controlador para obtener todas las rutas generales (historial?)

export const getAllRutas = async (req, res) => {
  try {
    const rutas = await ruta_MongooseModel.find();
    res.status(200).json(rutas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener una ruta activa específica por su ID
export const getRutaById = async (req, res) => {
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
};

// Controlador para crear una nueva ruta activa
export const createRuta = async (req, res) => {
  try {
    const nuevaRuta = await ruta_MongooseModel.create(req.body);
    res.status(201).json(nuevaRuta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para actualizar una ruta activa por su ID
export const updateRuta = async (req, res) => {
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
};

// Controlador para eliminar una ruta activa por su ID
export const deleteRuta = async (req, res) => {
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
};
