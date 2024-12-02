// // Request:
// // Descrição: Deletar Livro.
// // Método: Delete
// // Url:  3.141.87.82:8080/v1/livro/delete/1
// // Body: 
// // {
// //     "codigo": " 1"
// // }
// // Exemplo de resposta: 204 no content
// // Erros: 
// // 404: Livro não encontrado pelo codigo: 1

// // Request:
// // Descrição: Adicionar Livro.
// // Método: Post
// // Url:  3.141.87.82:8080/v1/livro/novo
// // Body: 
// // {
// //     "nome": "O Senhor dos Anéis",
// //     "codigoLivro": "ssa11",
// //     "autor": "J.R.R. Tolkien",
// //     "categoria": "Fantasia"
// // }
// // Exemplo de resposta: 201
// // Retorna o objeto criado acima com o id
// // Erros:  400- Erro ao salvar lirvo 



// // Função para deletar um livro pelo código
// async function deleteBookByCode(codigo) {
//     try {
//         const response = await fetch(`http://3.141.87.82:8080/v1/livro/delete/${codigo}`, {
//             method: 'DELETE'
//         });

//         if (response.status === 204) {
//             alert('Livro deletado com sucesso!');
//         } else if (response.status === 404) {
//             alert(`Livro não encontrado pelo código: ${codigo}`);
//         }
//     } catch (error) {
//         console.error('Erro ao deletar livro:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Função para adicionar um novo livro
// async function addNewBook(nome, codigoLivro, autor, categoria) {
//     const bookData = {
//         nome,
//         codigoLivro,
//         autor,
//         categoria
//     };

//     try {
//         const response = await fetch('http://3.141.87.82:8080/v1/livro/novo', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(bookData)
//         });

//         if (response.status === 201) {
//             const createdBook = await response.json();
//             console.log('Livro adicionado com sucesso:', createdBook);
//             alert('Livro adicionado com sucesso!');
//         } else if (response.status === 400) {
//             alert('Erro ao salvar livro. Verifique os dados e tente novamente.');
//         }
//     } catch (error) {
//         console.error('Erro ao adicionar livro:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Exemplo de chamadas às funções
// // Deletar livro pelo código
// deleteBookByCode(1);

// // Adicionar novo livro
// addNewBook('O Senhor dos Anéis', 'ssa11', 'J.R.R. Tolkien', 'Fantasia');
