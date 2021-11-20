const express = require('express')
const router = express.Router()

const animeController = require('./../controllers/animes.controller')

// Routes
// Obtener los animes o mostrarlos en pantalla
router.get('/', animeController.getAnimes)
router.put('/:id/update', animeController.putAnimes)

module.exports = router