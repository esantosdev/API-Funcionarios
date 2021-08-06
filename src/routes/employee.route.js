const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controller');

// Classificador por Salario  (Maior para menor)
router.get('/salario', employeeController.getEmployeebySal);

// Contagem Por UF
router.get('/:ufnasc', employeeController.getContagemporUf);

// Registros adicionados
router.get('/', employeeController.getRegistrosGerais);

// Novo Registro
router.post('/', employeeController.createNewEmployee);

// Atualizar Registro
router.put('/:Cpf', employeeController.updateEmployee);

// Deletar Registro
router.delete('/:Cpf', employeeController.deleteEmployee);

module.exports = router;