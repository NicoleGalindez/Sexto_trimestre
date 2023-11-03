import mongoose from "mongoose";

const mongoose = require('mongoose');

const uri = 'mongodb+srv://NicoleGalindez:nicole2501@cluster0.rw5wf5u.mongodb.net/?retryWrites=true&w=majority'; 

mongoose.connect(uri,
  {
  useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
  db.once('open', () => {
    console.log('Conexión exitosa a MongoDB Atlas');
  });
  