const express = require('express');
const router = express.Router();
const { login } = require('./authController');

// Definimos la ruta POST para el login
router.post('/login', login);

module.exports = router;