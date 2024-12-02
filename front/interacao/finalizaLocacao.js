
// // Request:
// // Descrição: Finalizar emprestimo.
// // Método: Post
// // Url:  3.141.87.82:8080/emprestimo/{id do emprestimo} ex:1
// // Body: 
// // Exemplo de resposta: 204
// // {
// // 	Retorna o obj do leitor
// // }
// // Erros:  
// // 400: Erro interno
// // 404: empréstimo não encontrado pelo id 

// // Função para finalizar um empréstimo
// async function finalizeLoan(loanId) {
//     try {
//         const response = await fetch(`http://3.141.87.82:8080/emprestimo/${loanId}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.status === 204) {
//             alert('Empréstimo finalizado com sucesso!');
//             console.log('Empréstimo finalizado:', loanId);
//         } else if (response.status === 404) {
//             alert('Empréstimo não encontrado pelo ID informado.');
//         } else if (response.status === 400) {
//             alert('Erro interno ao tentar finalizar o empréstimo.');
//         }
//     } catch (error) {
//         console.error('Erro ao finalizar empréstimo:', error);
//         alert('Erro de conexão. Tente novamente mais tarde.');
//     }
// }

// // Exemplo de chamada da função

// // Finalizar um empréstimo com ID 1
// finalizeLoan(1);