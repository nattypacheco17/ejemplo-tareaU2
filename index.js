const express = require('express');
const userRoutes = require('./routes/users');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

// Inicio del servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
