import express from "express";

const router = express.Router();

import {
  getAllAlertasAvisos,
  getAlertaAvisoById,
  createAlertaAviso,
  updateAlertaAviso,
  deleteAlertaAviso,
} from "./alertasAvisosController"; // Importa los controladores


// Ruta para obtener todas las alertas o avisos
router.get("/", getAllAlertasAvisos);

// Ruta para obtener una alerta o aviso por ID
router.get("/:id", getAlertaAvisoById);

// Ruta para crear una nueva alerta o aviso
router.post("/", createAlertaAviso);

// Ruta para actualizar una alerta o aviso por ID
router.put("/:id", updateAlertaAviso);

// Ruta para eliminar una alerta o aviso por ID
router.delete("/:id", deleteAlertaAviso);




//_________________________________________________________
import {
  getAllHistorialRuta,
  getHistorialRutaById,
  createHistorialRuta,
  updateHistorialRuta,
  deleteHistorialRuta,
} from './historialRutaController'; // Importa los controladores



// Ruta para obtener todos los registros en la colección historialRuta
router.get('/historialRuta', getAllHistorialRuta);

// Ruta para obtener un registro específico por su ID
router.get('/historialRuta/:id', getHistorialRutaById);

// Ruta para crear un nuevo registro en la colección historialRuta
router.post('/historialRuta', createHistorialRuta);

// Ruta para actualizar un registro por su ID
router.put('/historialRuta/:id', updateHistorialRuta);

// Ruta para eliminar un registro por su ID
router.delete('/historialRuta/:id', deleteHistorialRuta);


//___________________________________________________
import {
  getAllPuntosDeReferencia,
  getPuntoDeReferenciaById,
  createPuntoDeReferencia,
  updatePuntoDeReferencia,
  deletePuntoDeReferencia,
} from './puntosDeReferenciaController'; // Importa los controladores

// Ruta para obtener todos los puntos de referencia
router.get('/puntosDeReferencia', getAllPuntosDeReferencia);

// Ruta para obtener un punto de referencia específico por su ID
router.get('/puntosDeReferencia/:id', getPuntoDeReferenciaById);

// Ruta para crear un nuevo punto de referencia
router.post('/puntosDeReferencia', createPuntoDeReferencia);

// Ruta para actualizar un punto de referencia por su ID
router.put('/puntosDeReferencia/:id', updatePuntoDeReferencia);

// Ruta para eliminar un punto de referencia por su ID
router.delete('/puntosDeReferencia/:id', deletePuntoDeReferencia);

//_________________________________________________________

import {
  getAllRutasActivas,
  getRutaActivaById,
  createRutaActiva,
  updateRutaActiva,
  deleteRutaActiva,
} from './rutaActivaController'; // Importa los controladores


// Ruta para obtener todas las rutas activas
router.get('/rutaActiva', getAllRutasActivas);

// Ruta para obtener una ruta activa específica por su ID
router.get('/rutaActiva/:id', getRutaActivaById);

// Ruta para crear una nueva ruta activa
router.post('/rutaActiva', createRutaActiva);

// Ruta para actualizar una ruta activa por su ID
router.put('/rutaActiva/:id', updateRutaActiva);

// Ruta para eliminar una ruta activa por su ID
router.delete('/rutaActiva/:id', deleteRutaActiva);

//_________________________________________________________
// routes.js

import {
  getAllRutasActivas,
  getRutaActivaById,
  createRutaActiva,
  updateRutaActiva,
  deleteRutaActiva,
} from './rutaController';



// Rutas para las rutas activas
router.get('/rutasActivas', getAllRutasActivas);
router.get('/rutasActivas/:id', getRutaActivaById);
router.post('/rutasActivas', createRutaActiva);
router.put('/rutasActivas/:id', updateRutaActiva);
router.delete('/rutasActivas/:id', deleteRutaActiva);


//_________________________________________________________

import {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from './usuarioController'; // Importa los controladores


// Ruta para obtener todos los usuarios
router.get('/usuario', getAllUsuarios);

// Ruta para obtener un usuario específico por su ID
router.get('/usuario/:id', getUsuarioById);

// Ruta para crear un nuevo usuario
router.post('/usuario', createUsuario);

// Ruta para actualizar un usuario por su ID
router.put('/usuario/:id', updateUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/usuario/:id', deleteUsuario);

export default router;