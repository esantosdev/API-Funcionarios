const express = require('express')
const bodyParser = require('body-parser')
var axios = require('axios');

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

//Corrigindo erro de CORS
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// importar rota
const EmployeeRoutes = require('./src/routes/employee.route')
    // criar rota
app.use('/api/v1/employee', EmployeeRoutes)
    //porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

// consumindo com axios

axios.get("http://localhost:5000/api/v1/employee")
    .then(response => console.log(response)) //output
    .catch(error => console.log(error))