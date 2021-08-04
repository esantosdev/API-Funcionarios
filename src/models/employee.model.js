var dbConn = require('../../config/db.config');

var Employee = function(employee) {
    this.Nome = employee.Nome;
    this.cargo = employee.cargo;
    this.salario = employee.salario;
    this.status = employee.status;
    this.ufnasc = employee.ufnasc;
    this.status = employee.status;
    this.created_at = new Date();
    this.updated_at = new Date();
    this.Cpf = employee.Cpf;
}

// get all employees
Employee.getAllEmployees = (result) => {
    dbConn.query('SELECT * FROM employees WHERE is_deleted=0', (err, res) => {
        if (err) {
            console.log('Erro ao exibir lista', err);
            result(null, err);
        } else {
            console.log('Sucesso ao exibir lista');
            result(null, res);
        }
    })
}

// Buscando via CPF
Employee.getEmployeeByCpf = (Cpf, result) => {
    dbConn.query('SELECT * FROM employees WHERE Cpf=?', Cpf, (err, res) => {
        if (err) {
            console.log('Erro ao buscar registro por CPF', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

// registrando novo funcionario
Employee.createEmployee = (employeeReqData, result) => {
    dbConn.query('INSERT INTO employees SET ? ', employeeReqData, (err, res) => {
        if (err) {
            console.log('Erro ao inserir');
            result(null, err);
        } else {
            console.log('Adicionado com sucesso');
            result(null, res)
        }
    })
}

// atualizando registro
Employee.updateEmployee = (Cpf, employeeReqData, result) => {
    dbConn.query("UPDATE employees SET Nome=?,cargo=?,salario=?,status=?,ufnasc=?,Cpf=?, WHERE Cpf = ?", [employeeReqData.Nome, employeeReqData.cargo, employeeReqData.salario, employeeReqData.status, employeeReqData.ufnasc, employeeReqData.Cpf, Cpf], (err, res) => {
        if (err) {
            console.log('Erro ao atualizar');
            result(null, err);
        } else {
            console.log("Atualizado com sucesso");
            result(null, res);
        }
    });
}

// deletar registro
Employee.deleteEmployee = (Cpf, result) => {

    dbConn.query("UPDATE employees SET is_deleted=? WHERE Cpf = ?", [Cpf], (err, res) => {
        if (err) {
            console.log('Erro ao deletar');
            result(null, err);
        } else {
            console.log("Deletado com sucesso");
            result(null, res);
        }
    });
}

module.exports = Employee;