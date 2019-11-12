const Paciente = require('../models/paciente')

// Display list of all Patients.
exports.author_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient list')
}

// Display detail page for a specific Patient.
exports.author_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient detail: ' + req.params.id)
}

// Display Patient create form on GET.
exports.author_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient create GET')
}

// Handle Patient create on POST.
exports.author_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient create POST')
}

// Display Patient delete form on GET.
exports.author_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient delete GET')
}

// Handle Patient delete on POST.
exports.author_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient delete POST')
}

// Display Patient update form on GET.
exports.author_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient update GET')
}

// Handle Patient update on POST.
exports.author_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Patient update POST')
}
