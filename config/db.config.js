const mysql = require('mysql')

// conexao

const dbConn = mysql.createConnection({

    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'node_mysql_crud_db'



})

dbConn.connect(function(error) {

    if (error) throw error
    console.log('Conexao estabelecida')

})

module.exports = dbConn