
// // Leitor
// // Request:
// // Descrição: Bucar Todos.
// // Método: Get
// // Url:  3.141.87.82:8080/leitor/todos
// // Body: 
// // Exemplo de resposta: 200
// // {
// // 	Retorna uma lista com todos os leitores 
// // }
// // Erros: 
// // 500: Erro interno 



// // Request:
// // Descrição: Bucar por cpf.
// // Método: Get
// // Url:  3.141.87.82:8080/leitor/00197659080
// // Body: 
// // Exemplo de resposta: 200
// // {
// // 	Retorna o obj do leitor
// // }
// // Erros:  404: Leitor não encontrado 
// // Request:
// // Descrição: Atualizar leitor por cpf.
// // Método: Put
// // Url:  3.141.87.82:8080/leitor/00197659080
// // Body: 
// // {
// //     "email": "cr7@gmail.com"
// // }

// // Exemplo de resposta: 204
// // Erros:  
// // 404: Leitor não encontrado 
// // 409: Já existe um usuário com este email.


// // Request:
// // Descrição: Bloquear leitor por cpf.
// // Método: Put
// // Url:  3.141.87.82:8080/leitor/bloquear/00197659080
// // Body: 
// // Exemplo de resposta: 204 
// // Erros:  
// // 404: Leitor não encontrado 

// // Função para buscar todos os leitores
// async function fetchAllReaders() {
//     try {
//         const response = await fetch('http://3.141.87.82:8080/leitor/todos', {
//             method: 'GET'
//         });

//         if (response.ok) {
//             const leitores = await response.json();
//             console.log('Lista de todos os leitores:', leitores);
//         } else if (response.status === 500) {
//             alert('Erro interno no servidor. Tente novamente mais tarde.');
//         }
//     } catch (error) {
//         console.error('Erro ao buscar leitores:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Função para buscar um leitor pelo CPF
// async function fetchReaderByCpf(cpf) {
//     try {
//         const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
//             method: 'GET'
//         });

//         if (response.ok) {
//             const leitor = await response.json();
//             console.log('Leitor encontrado:', leitor);
//         } else if (response.status === 404) {
//             alert('Leitor não encontrado.');
//         }
//     } catch (error) {
//         console.error('Erro ao buscar leitor pelo CPF:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Função para atualizar o email de um leitor pelo CPF
// async function updateReaderEmailByCpf(cpf, email) {
//     try {
//         const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email })
//         });

//         if (response.status === 204) {
//             alert('Email atualizado com sucesso!');
//         } else if (response.status === 404) {
//             alert('Leitor não encontrado.');
//         } else if (response.status === 409) {
//             alert('Já existe um usuário com este email.');
//         }
//     } catch (error) {
//         console.error('Erro ao atualizar email do leitor:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Função para bloquear um leitor pelo CPF
// async function blockReaderByCpf(cpf) {
//     try {
//         const response = await fetch(`http://3.141.87.82:8080/leitor/bloquear/${cpf}`, {
//             method: 'PUT'
//         });

//         if (response.status === 204) {
//             alert('Leitor bloqueado com sucesso!');
//         } else if (response.status === 404) {
//             alert('Leitor não encontrado.');
//         }
//     } catch (error) {
//         console.error('Erro ao bloquear leitor:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Exemplo de chamadas às funções
// // Buscar todos os leitores
// fetchAllReaders();

// // Buscar leitor pelo CPF
// fetchReaderByCpf('00197659080');

// // Atualizar email de um leitor pelo CPF
// updateReaderEmailByCpf('00197659080', 'cr7@gmail.com');

// // Bloquear leitor pelo CPF
// blockReaderByCpf('00197659080');








