Uma API RESTful para gerenciamento de funcionários (pode ser adaptada para outras situações). <br>
Setup mínimo: Node + MySQL + VSCode (ou outro editor) + Postman (requisições e documentação).

Para regenerar node_modules -> npm install <br>
Servidor: nodemon index.js <br>

Outras informações importantes <br>
A documentação da API está disponível pelo link: https://documenter.getpostman.com/view/15654225/TzskChpC <br>
O arquivo SQL do Banco de Dados está dentro dos arquivos no repositório. Basta importar, ou copiar o script.

Funcionalidades e utilização básica

Tipos de requisição
GET/PUT/POST/DELETE

GET 
localhost:5000/api/v1/employee
Retorna a lista com todos  funcionários cadastrados <br>
[![num1.png](https://i.postimg.cc/bvG4Xntc/num1.png)](https://postimg.cc/jWbMPLcZ)

DELETE
ex: localhost:5000/api/v1/employee/(CPF do funcionário a ser deletado) <br> 
[![ttttttt.png](https://i.postimg.cc/5y93JcRY/ttttttt.png)](https://postimg.cc/TLSmjsGf)

PUT
ex: localhost:5000/api/v1/employee/(CPF do funcionário a ter informações atualizadas) <br>
Indique o campo e o valor a ser atualizado. <br> Ex: Atualizar o funcionário com um determinado nº de CPF, alterando seu salário para 10000.00. <br>
Isso pode ser feito via Postman <br>
[![Capturarggggg.png](https://i.postimg.cc/MTS5sf0Y/Capturarggggg.png)](https://postimg.cc/p9sKrT69)


POST
ex: localhost:5000/api/v1/employee
Indique os campos, assim como está escrito no DB, e os valores a adicionar. Seja para Nome, salário, Cpf, sem deixar campos em branco. <br>
 <br>
[![Capturarfffff.png](https://i.postimg.cc/pLS1Bd10/Capturarfffff.png)](https://postimg.cc/9DGpmc2T)


Extra <br>

GET <br>
Exibir classificação de salários (maior para menor salário) <br>
localhost:5000/api/v1/employee/salario <br>
[![salario.png](https://i.postimg.cc/8zwr8JVH/salario.png)](https://postimg.cc/zybfKfvb)


GET
Contagem de quantos funcionários há por UF (Unidade Federativa) <br>
localhost:5000/api/v1/employee/ufnasc <br>
[![ufnasc.png](https://i.postimg.cc/WprFNfvt/ufnasc.png)](https://postimg.cc/Yjrq8Rjw)

