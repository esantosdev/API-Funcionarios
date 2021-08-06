var dbConn = require('../../config/db.config');

var Employee = function(employee) {
    this.Nome = employee.Nome;
    this.cargo = employee.cargo;
    this.salario = employee.salario;
    this.DataCad = new Date();
    this.status = employee.status;
    this.ufnasc = employee.ufnasc;
    this.status = employee.status;
    this.criado_em = new Date();
    this.atualizado_em = new Date();
    this.Cpf = employee.Cpf;
}

// get all employees
Employee.getRegistrosGerais = (result) => {
    dbConn.query('SELECT * FROM employees', (err, res) => {
        if (err) {
            console.log('Error while fetching employess', err);
            result(null, err);
        } else {
            console.log('Employees fetched successfully');
            result(null, res);
        }
    })
}

// classificar por salario 
Employee.getBySal = (result) => {
    dbConn.query('SELECT salario, Nome FROM employees GROUP BY salario  ', (err, res) => {
        if (err) {
            console.log('Erro ao exibir lista', err);
            result(null, err);
        } else {
            console.log('Sucesso ao exibir lista');
            result(null, res);
        }
    })
}

// Contagem por UF

Employee.getContagemporUf = (ufnasc, Nome, result) => {
    dbConn.query(' SELECT ufnasc, COUNT (ufnasc) FROM employees GROUP BY ufnasc ', ufnasc, Nome, (err, res) => {
        if (err) {
            console.log('Erro ao exibir lista', err);
            result(null, err);
        } else {
            console.log('Sucesso ao exibir lista');
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
    dbConn.query("UPDATE employees SET Nome=?,cargo=?,salario=?, status=?, ufnasc=?,Cpf=?, DataCad=? WHERE Cpf = ?", [employeeReqData.Nome, employeeReqData.cargo, employeeReqData.salario, employeeReqData.status, employeeReqData.ufnasc, employeeReqData.Cpf, employeeReqData.DataCad, Cpf], (err, res) => {
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

    dbConn.query("DELETE FROM employees WHERE Cpf = ?", [Cpf], (err, res) => {
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