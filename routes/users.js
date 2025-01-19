const express = require('express');
const userService = require('../services/userService');
const router = express.Router();

// Ruta para obtener un usuario
router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error); // Pasar el error al middleware de manejo de errores
  }
});

// Ruta para crear un nuevo usuario
router.post('/', async (req, res, next) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
