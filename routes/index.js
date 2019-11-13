const express = require('express')
const router = express.Router()

// Require controller modules.
const pacienteController = require('../controllers/pacienteController.js')

// GET request for list of all Pacientes.
router.get('/', pacienteController.paciente_list)

router.get('/create', pacienteController.paciente_create_get)

// POST request for creating Paciente.
router.post('/create', pacienteController.paciente_create_post)

// GET request to delete Paciente.
router.get('/:id/delete', pacienteController.paciente_delete_get)

// POST request to delete Paciente.
router.post('/:id/delete', pacienteController.paciente_delete_post)

// GET request to update Paciente.
router.get('/:id/update', pacienteController.paciente_update_get)

// POST request to update Paciente.
router.post('/:id/update', pacienteController.paciente_update_post)

// GET request for one Paciente.
router.get('/:id', pacienteController.paciente_detail)

module.exports = router
