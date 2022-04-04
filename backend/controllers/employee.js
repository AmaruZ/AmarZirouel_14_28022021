const Employee = require('../models/Employee')

exports.createEmployee = (req, res, next) => {
    console.log(req.body)
    const employee = new Employee({
        ...req.body,
    })
    employee
        .save()
        .then(() => {
            res.status(201).json({ message: 'Employee saved' })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
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
