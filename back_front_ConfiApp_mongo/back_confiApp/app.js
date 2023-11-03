import express from "express";
import cors from "cors";
import "./src/database/db.js";

//import router from "./rutas/mirutas.js"; //modificar cuando se tengas las rutas


const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests


// Define routes
// app.use("/......", router);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

