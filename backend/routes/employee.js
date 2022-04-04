const express = require('express')
const router = express.Router()

const employeeCtrl = require('../controllers/employee.js')

router.post('/', employeeCtrl.createThing)
router.put('/:id', employeeCtrl.modifyThing)
router.delete('/:id', employeeCtrl.deleteThing)
router.get('/:id', employeeCtrl.getOneThing)
router.get('/', employeeCtrl.getAllThings)

module.exports = router
