// // Empréstimo
// // Request:
// // Descrição: Realizar empréstimo.
// // Método: Put
// // Url:  3.141.87.82:8080/emprestimo/save
// // Body: 
// // {
// //     "cpf": "81010557033",
// //     "codigoLivro": "ssa01"
// // }
// // Exemplo de resposta: 200 
// // {
// // 	Retorna um obj do empréstimo com dados do leitor e livro 
// // }
// // Erros:  
// // 400: livro indisponível 
// // 404: Livro não encontrado pelo cod 

// // Função para realizar empréstimo
// async function makeLoan(cpf, bookCode) {
//     const loanData = {
//         cpf: cpf,
//         codigoLivro: bookCode
//     };

//     try {
//         const response = await fetch('http://3.141.87.82:8080/emprestimo/save', {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(loanData)
//         });

//         if (response.status === 200) {
//             const data = await response.json();
//             alert('Empréstimo realizado com sucesso!');
//             console.log('Detalhes do empréstimo:', data);
//         } else if (response.status === 400) {
//             alert('Livro indisponível para empréstimo.');
//         } else if (response.status === 404) {
//             alert('Livro não encontrado pelo código informado.');
//         }
//     } catch (error) {
//         console.error('Erro ao realizar empréstimo:', error);
//         alert('Erro de conexão. Tente novamente mais tarde.');
//     }
// }

// // Exemplo de chamada da função

// // Realizar empréstimo com CPF "81010557033" e código do livro "ssa01"
// makeLoan('81010557033', 'ssa01');