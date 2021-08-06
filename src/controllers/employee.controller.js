const EmployeeModel = require('../models/employee.model');

// Lista de todos funcionarios
exports.getEmployeebySal = (req, res) => {

    EmployeeModel.getBySal((err, employees) => {
        console.log('Registros por valor de salario');
        if (err)
            res.send(err);
        console.log('Funcionarios por Salario', employees);
        res.send(employees)
    })
}

// Por Uf
exports.getContagemporUf = (req, res) => {

    EmployeeModel.getContagemporUf((err, employees) => {
        console.log('Registros por UF');
        if (err)
            res.send(err);
        console.log('Funcionarios por Uf', employees);
        res.send(employees)
    })
}


exports.getRegistrosGerais = (req, res) => {
    EmployeeModel.getRegistrosGerais((err, employees) => {
        console.log('We are here');
        if (err)
            res.send(err);
        console.log('Employees', employees);
        res.send(employees)
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



// deletar registro por n de CPF
exports.deleteEmployee = (req, res) => {
    EmployeeModel.deleteEmployee(req.params.Cpf, (err, employee) => {
        if (err)
            res.send(err);
        res.json({ success: true, message: 'Deletado com sucesso!' });
    })
}