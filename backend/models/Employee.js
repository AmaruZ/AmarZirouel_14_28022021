const mongoose = require('mongoose')

const uniqueValidator = require('mongoose-unique-validator')

const employeeSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: String, required: true },
    startDate: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    state: { type: String, required: true },
    departement: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

employeeSchema.plugin(uniqueValidator)

module.exports = mongoose.model('Employee', employeeSchema)
