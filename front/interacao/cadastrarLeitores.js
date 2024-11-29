
// Request:
// Descrição: Novo leitor.
// Método: Post
// Url:  3.141.87.82:8080/leitor/novo
// Body: 
// {
//     "nome": "Pedro Alves",
//     "cpf": "96032767078",
//     "email": "pedro@gmail.com",
//     "celular": "31999999999"
// }

// Exemplo de resposta: 201
// Erros:  
// 400: erro ao salvar leitor
// 409: Já existe um usuário com este email.

// Request:
// Descrição: Bloquear leitor por cpf.
// Método: Put
// Url:  3.141.87.82:8080/leitor/bloquear/00197659080
// Body: 
// Exemplo de resposta: 204 
// Erros:  
// 404: Leitor não encontrado 
