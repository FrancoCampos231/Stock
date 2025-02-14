const express = require('express');
const cors = require('cors'); // Instala CORS: npm install cors
const route = require('./src/routes');
const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());
app.use(express.json())

// Definir un endpoint de ejemplo
app.use('/data', route);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});