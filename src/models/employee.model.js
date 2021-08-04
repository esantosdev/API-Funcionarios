var dbConn = require('../../config/db.config')


var Employee = (employee) => {


    this.Nome = employee.Nome
    this.cargo = employee.cargo
    this.salario = employee.salario
    this.status = employee.status ? employee.status : 1;
    this.created_at = new Date();
    this.update_at = new Date()
    this.ufnasc = employee.ufnasc


}

// lista de funcionarios


Employee.getAllEmployees = (result) => {

    dbConn.query('SELECT * FROM employees', (err, res) => {
        if (err) {
            console.log('Erro ao coletar lista', err)
            result(null, err)
        } else {
            console.log('Sucesso ao coletar lista')
            result(null, res)
        }
    })

}

// obter funcionario por n CPF

Employee.getEmployeeByCpf = (Cpf, result) => {

    dbConn.query('SELECT * FROM employees WHERE Cpf=?', Cpf, (err, res) => {

        if (err) {
            console.log('Erro ao obter registro por CPF', err)
            result(null, err)
        } else {
            result(null, res)
        }

    })

}

module.exports = Employee