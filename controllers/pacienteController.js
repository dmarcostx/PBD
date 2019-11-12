const Paciente = require('../models/paciente')

// Display list of all Pacientes.
exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: Index')
}

// Display list of all Pacientes.
exports.paciente_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente list')
}

// Display detail page for a specific Paciente.
exports.paciente_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente detail: ' + req.params.id)
}

// Display Paciente create form on GET.
exports.paciente_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente create GET')
}

// Handle Paciente create on POST.
exports.paciente_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente create POST')
}

// Display Paciente delete form on GET.
exports.paciente_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente delete GET')
}

// Handle Paciente delete on POST.
exports.paciente_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente delete POST')
}

// Display Paciente update form on GET.
exports.paciente_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente update GET')
}

// Handle Paciente update on POST.
exports.paciente_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Paciente update POST')
}
