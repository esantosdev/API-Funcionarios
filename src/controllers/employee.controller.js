const EmployeeModel = require('../models/employee.model')

// lista de funcionarios

exports.getEmployeeList = (req, res) => {

    console.log('Aqui esta a lista de funcionarios')

    EmployeeModel.getAllEmployees((err, employees) => {
        console.log('Aqui esta')
        if (err)
            res.send(err)
        console.log('Employees', employees)
        res.send(employees)

    })

}

// obter funcionario por Cpf

exports.getEmployeeByCpf = (req, res) => {
    //console.log('Obter registro por CPF')

    EmployeeModel.getEmployeeByCpf(req.params.Cpf, (err, employee) => {
        if (err)
            res.send(err)
        console.log('single employee', employee)
        res.send(employee)

    })
}

// criar novo registro de funcionario

exports.createNewEmployee = (req, res) => {
    console.log('Criar novo funcionario')
}