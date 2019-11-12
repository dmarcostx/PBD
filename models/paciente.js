const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PacienteSchema = new Schema(
  {
    cod_paciente: { type: Number, required: true },
    nome_pac: { type: String, required: true },
    end_pac: { type: String, required: true },
    dt_nascto_pac: { type: Date, required: true },
    fone_pac: { type: String },
    sexo_pac: { type: String, required: true },
    tipo_sangue_pac: { type: String, required: true },
    cpf_responsavel: { type: Number, required: true }
  }
)

// Virtual for author's URL
PacienteSchema
  .virtual('url')
  .get(function () {
    return '/paciente/' + this._id
  })

// Export model
module.exports = mongoose.model('Paciente', PacienteSchema)
