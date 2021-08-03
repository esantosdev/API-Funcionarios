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