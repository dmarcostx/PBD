const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PacienteSchema = new Schema(
  {
    prontuario: { type: Number, required: true },
    nome: { type: String, required: true },
    sexo: { type: String, required: true },
    dt_nascto: { type: Date, required: true },
    tipo_sangue: { type: String, required: true },
    internacoes: [Number],
    cpf: { type: Number },
    doencas_pre: [{ doenca: String, desde: Number }]
  },
  {
    collection: 'paciente'
  }
)

// Virtual for author's URL
PacienteSchema
  .virtual('url')
  .get(function () {
    return '/' + this._id
  })

// Export model
module.exports = mongoose.model('paciente', PacienteSchema)
