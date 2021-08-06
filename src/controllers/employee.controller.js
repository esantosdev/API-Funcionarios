const EmployeeModel = require('../models/employee.model');

// Lista de todos funcionarios
exports.getEmployeeList = (req, res) => {

    EmployeeModel.getAllEmployees((err, employees) => {
        console.log('Lista de todos funcionarios');
        if (err)
            res.send(err);
        console.log('Funcionarios', employees);
        res.send(employees)
    })
}

// Retornando por CPF
exports.getEmployeeByCpf = (req, res) => {
    //console.log('retornando por CPF');
    EmployeeModel.getEmployeeByCpf(req.params.Cpf, (err, employee) => {
        if (err)
            res.send(err);
        console.log('registro especifico', employee);
        res.send(employee);
    })
}

// criar novo registro
exports.createNewEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData', employeeReqData);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Por favor, preencha todos os campos' });
    } else {
        EmployeeModel.createEmployee(employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Registrado com sucesso', data: employee.insertCpf })
        })
    }
}

// atualizar registro. a atualizacao e feita baseada no CPF do funcionario! 
// ex: localhost:5000/api/v1/employee/4356789811 
// estarei compartilhando meu workspace do postman, para que compreendam melhor

exports.updateEmployee = (req, res) => {
    const employeeReqData = new EmployeeModel(req.body);
    console.log('employeeReqData update', employeeReqData);

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        console.log({ success: false, message: 'Por favor, preencha todos os campos' });
    } else {
        EmployeeModel.updateEmployee(req.params.Cpf, employeeReqData, (err, employee) => {
            if (err)
                res.send(err);
            res.json({ status: true, message: 'Registro atualizado com sucesso!' })
        })
    }
}

// deletar registro
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.Cpf, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Deletado com sucesso!' });
    })
}