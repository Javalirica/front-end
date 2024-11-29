// Request:
// Descrição: Deletar Livro.
// Método: Delete
// Url:  3.141.87.82:8080/v1/livro/delete/1
// Body: 
// {
//     "codigo": " 1"
// }
// Exemplo de resposta: 204 no content
// Erros: 
// 404: Livro não encontrado pelo codigo: 1

// Request:
// Descrição: Adicionar Livro.
// Método: Post
// Url:  3.141.87.82:8080/v1/livro/novo
// Body: 
// {
//     "nome": "O Senhor dos Anéis",
//     "codigoLivro": "ssa11",
//     "autor": "J.R.R. Tolkien",
//     "categoria": "Fantasia"
// }
// Exemplo de resposta: 201
// Retorna o objeto criado acima com o id
// Erros:  400- Erro ao salvar lirvo 
