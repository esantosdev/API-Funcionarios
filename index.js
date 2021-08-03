const express = require('express')

const app = express()

const port = 5000

// importar rota

const employeeRoutes = require('./src/routes/employee.route')

// criar rota

app.use('/api/v1/employee', employeeRoutes)


app.get('/', (req, res) => {
    res.send('Ola')
})


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})