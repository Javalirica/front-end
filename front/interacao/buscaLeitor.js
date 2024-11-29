// Leitor
// Request:
// Descrição: Bucar Todos.
// Método: Get
// Url:  3.141.87.82:8080/leitor/todos
// Body: 
// Exemplo de resposta: 200
// {
// 	Retorna uma lista com todos os leitores 
// }
// Erros: 
// 500: Erro interno 



// Request:
// Descrição: Bucar por cpf.
// Método: Get
// Url:  3.141.87.82:8080/leitor/00197659080
// Body: 
// Exemplo de resposta: 200
// {
// 	Retorna o obj do leitor
// }
// Erros:  404: Leitor não encontrado 
// Request:
// Descrição: Atualizar leitor por cpf.
// Método: Put
// Url:  3.141.87.82:8080/leitor/00197659080
// Body: 
// {
//     "email": "cr7@gmail.com"
// }

// Exemplo de resposta: 204
// Erros:  
// 404: Leitor não encontrado 
// 409: Já existe um usuário com este email.

