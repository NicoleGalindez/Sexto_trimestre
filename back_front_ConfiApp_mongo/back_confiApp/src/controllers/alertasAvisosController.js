import { alertasAvisos_MongooseModel } from "./tu_archivo_de_modelo";

// Controlador para obtener todas las alertas o avisos
export const getAllAlertasAvisos = async (req, res) => {
  try {
    const alertasAvisos = await alertasAvisos_MongooseModel.find();
    res.json(alertasAvisos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las alertas o avisos" });
  }
};

// Controlador para obtener una alerta o aviso por ID
export const getAlertaAvisoById = async (req, res) => {
  try {
    const alertaAviso = await alertasAvisos_MongooseModel.findById(req.params.id);
    if (!alertaAviso) {
      return res.status(404).json({ error: "Alerta o aviso no encontrado" });
    }
    res.json(alertaAviso);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la alerta o aviso" });
  }
};

// Controlador para crear una nueva alerta o aviso
export const createAlertaAviso = async (req, res) => {
  const { tipoAlertaAviso, ultimaUbicacion, mensajeAlertaAviso, vozAlertaAviso } = req.body;

  try {
    const nuevaAlertaAviso = new alertasAvisos_MongooseModel({
      tipoAlertaAviso,
      ultimaUbicacion,
      mensajeAlertaAviso,
      vozAlertaAviso,
    });

    const resultado = await nuevaAlertaAviso.save();
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({ error: "Error al crear una nueva alerta o aviso" });
  }
};

// Controlador para actualizar una alerta o aviso por ID
export const updateAlertaAviso = async (req, res) => {
  try {
    const alertaAviso = await alertasAvisos_MongooseModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!alertaAviso) {
      return res.status(404).json({ error: "Alerta o aviso actualizada" });
    }
    res.json(alertaAviso);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la alerta o aviso" });
  }
};

// Controlador para eliminar una alerta o aviso por ID
export const deleteAlertaAviso = async (req, res) => {
  try {
    const alertaAviso = await alertasAvisos_MongooseModel.findByIdAndRemove(req.params.id);
    if (!alertaAviso) {
      return res.status(404).json({ error: "Alerta o aviso no encontrado" });
    }
    res.json({ message: "Alerta o aviso eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la alerta o aviso" });
  }
};
