// // fetchAllReaders();


// // fetchReaderByCpf('00197659080');


// // updateReaderEmailByCpf('00197659080', 'cr7@gmail.com');


// // blockReaderByCpf('00197659080');

// async function fetchAllReaders() {
//     const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

//     if (!token) {
//         alert('Você precisa estar autenticado para acessar esta página.');
//         return;
//     }

//     try {
//         const response = await fetch('http://3.141.87.82:8080/leitor/todos', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
//             }
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

// // Função para buscar um leitor pelo CPF com autenticação
// async function fetchReaderByCpf(cpf) {
//     const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

//     if (!token) {
//         alert('Você precisa estar autenticado para acessar esta página.');
//         return;
//     }

//     try {
//         const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
//             }
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

// // Função para atualizar o email de um leitor pelo CPF com autenticação
// async function updateReaderEmailByCpf(cpf, email) {
//     const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

//     if (!token) {
//         alert('Você precisa estar autenticado para acessar esta página.');
//         return;
//     }

//     try {
//         const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
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

// // Função para bloquear um leitor pelo CPF com autenticação
// async function blockReaderByCpf(cpf) {
//     const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

//     if (!token) {
//         alert('Você precisa estar autenticado para acessar esta página.');
//         return;
//     }

//     try {
//         const response = await fetch(`http://3.141.87.82:8080/leitor/bloquear/${cpf}`, {
//             method: 'PUT',
//             headers: {
//                 'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
//             }
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


