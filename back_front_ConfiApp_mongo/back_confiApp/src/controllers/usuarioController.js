import { usuario_MongooseModel } from './usuarioModel';

// Controlador para obtener todos los usuarios
export const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await usuario_MongooseModel.find();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para obtener un usuario específico por su ID
export const getUsuarioById = async (req, res) => {
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
};

// Controlador para crear un nuevo usuario
export const createUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await usuario_MongooseModel.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controlador para actualizar un usuario por su ID
export const updateUsuario = async (req, res) => {
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
};

// Controlador para eliminar un usuario por su ID
export const deleteUsuario = async (req, res) => {
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
};
