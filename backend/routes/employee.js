const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employee.js')
const auth = require('../middleware/auth.js')

router.post('/login', employeeCtrl.loginEmployee)
router.post('/', employeeCtrl.createEmployee)
router.put('/:id', auth, employeeCtrl.modifyEmployee)
router.delete('/:id', auth, employeeCtrl.deleteEmployee)
router.get('/:id', auth, employeeCtrl.getOneEmployee)
router.get('/', employeeCtrl.getAllEmployees)

module.exports = router
