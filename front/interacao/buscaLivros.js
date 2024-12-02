
// Livros
// Request:
// Descrição: Bucar por nome.
// Método: Get
// Url:  3.141.87.82:8080/v1/livro/nome?nome=anéis
// Body: 
// {
//     "nome": " aneis"
// }
// Exemplo de resposta: 200 ok
// {
//    Retorna uma lista de todos os livros com “anéis” no nome
// }
// Erros: 
// 500: erro interno.

// Request:
// Descrição: Bucar todos os livros.
// Método: Get
// Url:  3.141.87.82:8080/v1/livro/todos
// Body: 
// Exemplo de resposta: 201 -ok
// {
//    Retorna uma lista de todos os Livros
// }    Erros: 500: erro interno.

// Função para buscar livros por nome


// async function fetchBooksByName(nome) {
//     try {
//         const response = await fetch(`http://3.141.87.82:8080/v1/livro/nome?nome=${encodeURIComponent(nome)}`, {
//             method: 'GET'
//         });

//         if (response.ok) {
//             const livros = await response.json();
//             console.log('Lista de livros com o nome:', livros);
//         } else if (response.status === 500) {
//             alert('Erro interno no servidor. Tente novamente mais tarde.');
//         }
//     } catch (error) {
//         console.error('Erro ao buscar livros por nome:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Função para buscar todos os livros
// async function fetchAllBooks() {
//     try {
//         const response = await fetch('http://3.141.87.82:8080/v1/livro/todos', {
//             method: 'GET'
//         });

//         if (response.ok) {
//             const livros = await response.json();
//             console.log('Lista de todos os livros:', livros);
//         } else if (response.status === 500) {
//             alert('Erro interno no servidor. Tente novamente mais tarde.');
//         }
//     } catch (error) {
//         console.error('Erro ao buscar todos os livros:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Exemplo de chamadas às funções
// // Buscar livros pelo nome
// fetchBooksByName('anéis');

// // Buscar todos os livros
// fetchAllBooks();