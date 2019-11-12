const express = require('express')
const router = express.Router()

// Require controller modules.
const pacienteController = require('../controllers/pacienteController.js')

/* GET home page. */
router.get('/', pacienteController.index)

router.get('/paciente/create', pacienteController.paciente_create_get)

// POST request for creating Author.
router.post('/paciente/create', pacienteController.paciente_create_post)

// GET request to delete Author.
router.get('/paciente/:id/delete', pacienteController.paciente_delete_get)

// POST request to delete Author.
router.post('/paciente/:id/delete', pacienteController.paciente_delete_post)

// GET request to update Author.
router.get('/paciente/:id/update', pacienteController.paciente_update_get)

// POST request to update Author.
router.post('/paciente/:id/update', pacienteController.paciente_update_post)

// GET request for one Author.
router.get('/paciente/:id', pacienteController.paciente_detail)

// GET request for list of all Authors.
router.get('/pacientes', pacienteController.paciente_list)

module.exports = router
