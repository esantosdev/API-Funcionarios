function obterDados(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText

}

function criaLinha(employee) {

    linha = document.createElement("tr")
    tdNome = document.createElement("td")
    tdcargo = document.createElement("td")
    tdsalario = document.createElement("td")
    tdCpf = document.createElement("td")
    tdstatus = document.createElement("td")
    tdufnasc = document.createElement("td")
    tdDataCad = document.createElement("td")


    tdNome.innerHTML = employee.Nome
    tdcargo.innerHTML = employee.cargo
    tdsalario.innerHTML = employee.salario
    tdCpf.innerHTML = employee.Cpf
    tdstatus.innerHTML = employee.status
    tdufnasc.innerHTML = employee.ufnasc
    tdDataCad.innerHTML = employee.DataCad

    linha.appendChild(tdNome)
    linha.appendChild(tdcargo)
    linha.appendChild(tdcargo)
    linha.appendChild(tdsalario)
    linha.appendChild(tdstatus)
    linha.appendChild(tdCpf)
    linha.appendChild(tdufnasc)
    linha.appendChild(tdDataCad)

    return linha



}

function main() {
    let data = obterDados("http://localhost:5000/api/v1/employee")
    let employee = JSON.parse(data)
    let tabela = document.getElementById("tabela")

    employee.forEach(element => {
        let linha = criaLinha(element)
        tabela.appendChild(linha)

    })

}

main()