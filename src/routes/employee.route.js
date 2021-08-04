const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// Listar todos registros
router.get('/', employeeController.getEmployeeList);

// Retornar via CPF
router.get('/:Cpf', employeeController.getEmployeeByCpf);

// Novo Registro
router.post('/', employeeController.createNewEmployee);

// Atualizar Registro
router.put('/:Cpf', employeeController.updateEmployee);

// Deletar Registro
router.delete('/:Cpf', employeeController.deleteEmployee);

module.exports = router;