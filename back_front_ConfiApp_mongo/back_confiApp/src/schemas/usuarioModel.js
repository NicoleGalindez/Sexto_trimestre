/**
* Generated by MongoDB Relational Migrator 
* https://www.mongodb.com/products/relational-migrator 
* Collection: usuario
* Language: JavaScript
* Template: Mongoose
* Generated on 18/10/23

*/
import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

export const usuario_Mongoose = new Schema({
    "_id": mongoose.ObjectId,
    "fotoPersona": Buffer,
    "primerNombre": String,
    "segundoNombre": String,
    "primerApellido": String,
    "segundoApellido": String,
    "direccionUsuario": String,
    "emailUsuario": String,
    "contraseAUsuario": String,
    "telefonoUsuario": String,
    "telefonoAlternativo": String,
    "fechaNacimiento": Date,
    "informacionAdicional": String,
    "rhUsuario": String,
    "rhUsuario": String,
    "numeroDocumento": String,
    "rolUsuario": {"Tutor": String, "Menor": String},
}, { collection: "usuario" })

export const usuario_MongooseModel = model("usuario_Mongoose", usuario_Mongoose);



