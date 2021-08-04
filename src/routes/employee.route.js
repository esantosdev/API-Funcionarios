const express = require('express')
const router = express.Router()

const EmployeeController = require('../controllers/employee.controller')

//obter lista com todos funcionarios

router.get('/', EmployeeController.getEmployeeList)


// obter registros por CPF

router.get('/:Cpf', EmployeeController.getEmployeeByCpf)

// inserir novo funcionario

router.post('/', EmployeeController.createNewEmployee)

module.exports = router