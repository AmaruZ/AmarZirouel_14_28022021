const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employee.js')

router.post('/', employeeCtrl.createEmployee)
router.post('/login', employeeCtrl.loginEmployee)
router.put('/:id', employeeCtrl.modifyEmployee)
router.delete('/:id', employeeCtrl.deleteEmployee)
router.get('/:id', employeeCtrl.getOneEmployee)
router.get('/', employeeCtrl.getAllEmployees)

module.exports = router
