
// // Request:
// // Descrição: Bucar todos os empréstimos ativos.
// // Método: Get
// // Url:  3.141.87.82:8080/emprestimo/todos
// // Body: 
// // Exemplo de resposta: 200
// // {
// // 	Lista de emprestimos
// // }
// // Erros:  400: erro interno 

// // Função para buscar todos os empréstimos ativos
// async function fetchAllActiveLoans() {
//     try {
//         const response = await fetch('http://3.141.87.82:8080/emprestimo/todos', {
//             method: 'GET'
//         });

//         if (response.ok) {
//             const emprestimos = await response.json();
//             console.log('Lista de empréstimos ativos:', emprestimos);
//         } else if (response.status === 400) {
//             alert('Erro interno no servidor. Tente novamente mais tarde.');
//         }
//     } catch (error) {
//         console.error('Erro ao buscar empréstimos ativos:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Exemplo de chamada à função
// fetchAllActiveLoans();
