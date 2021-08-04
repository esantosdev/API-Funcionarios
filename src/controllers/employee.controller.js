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
    console.log('req data', req.body)
        // checar valores nulos
    if (req.body.contructor == Object && Object(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'Por favor, preencha todos os campos' })
    } else {
        console.log('dados validos')
    }

}