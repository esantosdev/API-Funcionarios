const express = require('express')
const bodyParser = require('body-parser')
    //criando app express
const app = express()

//definir porta do server
const port = 5000

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


//root 
app.get('/', (req, res) => {
    res.send('Ola')
})

// importar rota
const EmployeeRoutes = require('./src/routes/employee.route')
    // criar rota
app.use('/api/v1/employee', EmployeeRoutes)
    //porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})