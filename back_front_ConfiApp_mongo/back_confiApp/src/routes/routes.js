
import express  from "express";

const router = express.Router();

//______________________________________
import alertasavisos from "../controladores/aprendizController.js";

// Rutas para el modelo aprendiz
router.get("/aprendiz", aprendizController.obtenerTodosLosAprendices);
router.get("/aprendiz/:id", aprendizController.obtenerAprendizPorID);
router.post("/aprendiz", aprendizController.crearAprendiz);
router.put("/aprendiz/:id", aprendizController.actualizarAprendizPorID);
router.delete("/aprendiz/:id", aprendizController.eliminarAprendizPorID);

//______________________________________
import  competenciaController from  "../controladores/competenciaController.js";

// Rutas para el modelo Competencia
router.get("/competencias", competenciaController.obtenerTodasLasCompetencias);
router.get("/competencias/:id", competenciaController.obtenerCompetenciaPorID);
router.post("/competencias", competenciaController.crearCompetencia);
router.put("/competencias/:id", competenciaController.actualizarCompetenciaPorID);
router.delete("/competencias/:id", competenciaController.eliminarCompetenciaPorID);
//______________________________________

import  cursoController from  "../controladores/cursoController.js";


// Rutas para el modelo cursos
router.get("/curso", cursoController.obtenerTodosLosCursos);
router.get("/curso/:id", cursoController.obtenerCursoPorID);
router.post("/curso", cursoController.crearCurso);
router.put("/curso/:id", cursoController.actualizarCursoPorID);
router.delete("/curso/:id", cursoController.eliminarCursoPorID);
//______________________________________
import  instructorController from  "../controladores/instructorController.js";

// Rutas para el modelo instructor
router.get("/instructor", instructorController.obtenerTodosLosInstructores);
router.get("/instructor/:id", instructorController.obtenerInstructorPorID);
router.post("/instructor", instructorController.crearInstructor);
router.put("/instructor/:id", instructorController.actualizarInstructorPorID);
router.delete("/instructor/:id", instructorController.eliminarInstructorPorID);
//______________________________________

import  notasController from  "../controladores/notasController.js";

// Rutas para el modelo notas
router.get("/notas", notasController.obtenerTodasLasNotas);
router.get("/notas/:id", notasController.obtenerNotaPorID);
router.post("/notas", notasController.crearNota);
router.put("/notas/:id", notasController.actualizarNotaPorID);
router.delete("/notas/:id", notasController.eliminarNotaPorID); 
//______________________________________

import  resultadosController from  "../controladores/resultadosController.js";

// Rutas para el modelo resultados
router.get("/resultados", resultadosController.obtenerTodosLosResultados);
router.get("/resultados/:id", resultadosController.obtenerResultadoPorID);
router.post("/resultados", resultadosController.crearResultado);
router.put("/resultados/:id", resultadosController.actualizarResultadoPorID);
router.delete("/resultados/:id", resultadosController.eliminarResultadoPorID); 


export default router;
