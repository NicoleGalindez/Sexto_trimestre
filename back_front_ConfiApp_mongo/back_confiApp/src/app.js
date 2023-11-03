import express from "express";
import cors from "cors";

import router from "./rutas/mirutas.js"; //modificar cuando se tengas las rutas

import mongoose from "mongoose";

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
try {
  await mongoose.connect('mongodb://localhost/Backend_ConfiApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connection successful");
} catch (error) {
  console.error("Error connecting to MongoDB", error);}

// Define routes
app.use("/......", router);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

