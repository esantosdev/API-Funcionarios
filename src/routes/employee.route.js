const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employee.controller')

router.get('/', EmployeeController.getEmployeeList)

router.get('/:Cpf', EmployeeController.getEmployeeByCpf)

module.exports = router