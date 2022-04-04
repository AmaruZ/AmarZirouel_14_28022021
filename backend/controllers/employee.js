const Employee = require('../models/Employee')

exports.createThing = (req, res, next) => {
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

exports.modifyThing = (req, res, next) => {
    Employee.updateOne(
        { _id: req.params.id },
        { ...req.body, _id: req.params.id }
    )
        .then(() => res.status(200).json({ message: 'Employee modified!' }))
        .catch((error) => res.status(400).json({ error }))
}

exports.deleteThing = (req, res, next) => {
    Employee.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Employee deleted!' }))
        .catch((error) => res.status(400).json({ error }))
}

exports.getOneThing = (req, res, next) => {
    Employee.findOne({ _id: req.params.id })
        .then((thing) => res.status(200).json(thing))
        .catch((error) => res.status(404).json({ error }))
}

exports.getAllThings = (req, res, next) => {
    Employee.find()
        .then((things) => {
            res.status(200).json(things)
        })
        .catch((error) => res.status(400).json(error))
}
