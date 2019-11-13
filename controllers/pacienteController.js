const { body, validationResult } = require('express-validator/check')
const { sanitizeBody } = require('express-validator/filter')

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
  res.render('paciente_form', { title: 'Cadastro de paciente' })
}

// Handle Paciente create on POST.
exports.paciente_create_post = {
  // Validate fields.
  body('nome_pac').isLength({ min: 2 }).trim().withMessage('Insira o nome do paciente.').isAlphanumeric().withMessage('O nome possuí caracteres especiais.'),
  body('end_pac').isLength({ min: 3 }).trim().withMessage('Insira o endereço do paciente.').isAlphanumeric().withMessage('O endereço possuí caracteres especiais.'),
  body('dt_nascto_pac').isISO8601().withMessage('Data de nascimento não está no formato esperado.'),
  body('fone_pac').optional({ checkFalsy: true }).isLength({ min: 8 }).trim().withMessage('Telefone muito curto.').isAlphanumeric().withMessage('O telefone possuí caracteres especiais.'),
  body('sexo_pac').isLength({ min: 1 }).trim().withMessage('Insira o sexo do paciente.').isAlphanumeric().withMessage('O sexo possuí caracteres especiais.'),
  body('tipo_sangue_pac').isLength({ min: 1 }).trim().withMessage('Insira o tipo de sangue do paciente.').isAlphanumeric().withMessage('O tipo de sangue possuí caracteres especiais.'),
  body('cpf_responsavel').isLength({ min: 11 }).trim().withMessage('Insira o CPF do responsável.').isAlphanumeric().withMessage('O CPF do responsável possuí caracteres especiais.'),

  // Sanitize fields.
  sanitizeBody('nome_pac').escape(),
  sanitizeBody('end_pac').escape(),
  sanitizeBody('dt_nascto_pac').toDate(),
  sanitizeBody('fone_pac').escape(),
  sanitizeBody('sexo_pac').escape(),
  sanitizeBody('tipo_sangue_pac').escape(),
  sanitizeBody('cpf_responsavel').escape(),

  // Process request after validation and sanitization.
  (req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      // There are errors. Render form again with sanitized values/errors messages.
      res.render('paciente_form', { title: 'Cadastro de paciente', author: req.body, errors: errors.array() })
    } else {
      // Data from form is valid.

      // Create an Paciente object with escaped and trimmed data.
      const paciente = new Paciente(
        {
          nome_pac: req.body.nome_pac,
          end_pac: req.body.end_pac,
          dt_nascto_pac: req.body.dt_nascto_pac,
          fone_pac: req.body.fone_pac,
          sexo_pac: req.body.sexo_pac,
          tipo_sangue_pac: req.body.tipo_sangue_pac,
          cpf_responsavel: req.body.cpf_responsavel
        })
      paciente.save(function (err) {
        if (err) { return next(err) }
        // Successful - redirect to new paciente record.
        res.redirect(paciente.url)
      })
    }
  }
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
