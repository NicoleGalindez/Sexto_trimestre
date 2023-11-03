import { historialRuta_MongooseModel } from './rutaModel';

// Controlador para obtener todos los registros en la colección historialRuta
export const getAllHistorialRuta = async (req, res) => {
  try {
    const historialRuta = await historialRuta_MongooseModel.find();
    res.status(200).json(historialRuta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener un registro específico por su ID
export const getHistorialRutaById = async (req, res) => {
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
};

// Controlador para crear un nuevo registro en la colección historialRuta
export const createHistorialRuta = async (req, res) => {
  try {
    const newHistorialRuta = await historialRuta_MongooseModel.create(req.body);
    res.status(201).json(newHistorialRuta);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para actualizar un registro por su ID
export const updateHistorialRuta = async (req, res) => {
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
};

// Controlador para eliminar un registro por su ID
export const deleteHistorialRuta = async (req, res) => {
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
};
