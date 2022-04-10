const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Employee = require('../models/Employee')

exports.createEmployee = (req, res, next) => {
    console.log(req.body)
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => {
            console.log(hash)
            const employee = new Employee({
                ...req.body,
            })
            console.log(employee)
            employee.password = hash
            employee
                .save()
                .then(() => res.status(201).json({ message: 'Employee saved' }))
                .catch((error) => res.status(400).json({ error }))
        })
        .catch((error) => {
            res.status(500).json({ error })
        })
}

exports.loginEmployee = (req, res, next) => {
    Employee.findOne({ email: req.body.email })
        .then((employee) => {
            if (!employee) {
                return res.status(401).json({ error: 'Employee not found' })
            }
            bcrypt
                .compare(req.body.password, employee.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Wrong password' })
                    }
                    res.status(200).json({
                        employeeId: employee._id,
                        token: jwt.sign(
                            { employeeId: employee._id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        ),
                    })
                })
        })
        .catch((error) => res.status(500).json({ error }))
}

exports.modifyEmployee = (req, res, next) => {
    Employee.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: 'Employee modified!' }))
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteEmployee = (req, res, next) => {
    Employee.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Employee deleted!' }))
        .catch((error) => res.status(400).json({ error }))
}

exports.getOneEmployee = (req, res, next) => {
    Employee.findOne({ _id: req.params.id })
        .then((employee) => res.status(200).json(employee))
        .catch((error) => res.status(404).json({ error }))
}

exports.getAllEmployees = (req, res, next) => {
    Employee.find()
        .then((employees) => {
            res.status(200).json(employees)
        })
        .catch((error) => res.status(400).json(error))
}
