// Request:
// Descrição: Criar um novo gerenciador .
// Método: Post
// Url:  3.141.87.82:8080/gerenciador/novo
// Body: 
// {
//   "nome": "guilherme Silva",
//   "role": "SUBADMIN",
//   "email": "guilherme1@gmail.com",
//   "senha": "senha123"
// }

// Exemplo de resposta: 201 -ok
// }
//   "nome": "guilherme Silva",
//   "role": "SUBADMIN",
//   "email": "guilherme1@gmail.com",
//     "senha": "$2a$10$z74TvyN4sTMPCV0NCfCYt.jJzGE9paGdcm3FYF9CWnDuIlq9YIJkq"
// }
// Erros: 
// 400: Erro ao tentar criar o administrador.
// 409: Email já cadastrado.



//  Request:
// Descrição: Bucar Todos Gerenciadores.
// Método: Get
// Url:  3.141.87.82:8080/gerenciador/todos
// Body:  (Vazio)

// Exemplo de resposta: 200 -ok
// {
//   lista de  obj do gerenciador como exemplos acima 
// }
// Erros: 
// 500: Internal Server Error .








