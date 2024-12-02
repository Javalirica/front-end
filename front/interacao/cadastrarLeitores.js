
// // Request:
// // Descrição: Novo leitor.
// // Método: Post
// // Url:  3.141.87.82:8080/leitor/novo
// // Body: 
// // {
// //     "nome": "Pedro Alves",
// //     "cpf": "96032767078",
// //     "email": "pedro@gmail.com",
// //     "celular": "31999999999"
// // }

// // Exemplo de resposta: 201
// // Erros:  
// // 400: erro ao salvar leitor
// // 409: Já existe um usuário com este email.

// // Request:
// // Descrição: Bloquear leitor por cpf.
// // Método: Put
// // Url:  3.141.87.82:8080/leitor/bloquear/00197659080
// // Body: 
// // Exemplo de resposta: 204 
// // Erros:  
// // 404: Leitor não encontrado 


// // Função para adicionar um novo leitor
// async function addNewReader(nome, cpf, email, celular) {
//     const readerData = {
//         nome,
//         cpf,
//         email,
//         celular
//     };

//     try {
//         const response = await fetch('http://3.141.87.82:8080/leitor/novo', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(readerData)
//         });

//         if (response.status === 201) {
//             alert('Leitor adicionado com sucesso!');
//             const createdReader = await response.json();
//             console.log('Leitor criado:', createdReader);
//         } else if (response.status === 400) {
//             alert('Erro ao salvar leitor. Verifique os dados e tente novamente.');
//         } else if (response.status === 409) {
//             alert('Já existe um usuário com este email.');
//         }
//     } catch (error) {
//         console.error('Erro ao adicionar leitor:', error);
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
//             alert(`Leitor com CPF ${cpf} bloqueado com sucesso!`);
//         } else if (response.status === 404) {
//             alert(`Leitor não encontrado para o CPF: ${cpf}`);
//         }
//     } catch (error) {
//         console.error('Erro ao bloquear leitor:', error);
//         alert('Erro de conexão. Tente novamente.');
//     }
// }

// // Exemplo de chamadas às funções
// // Adicionar novo leitor
// addNewReader('Pedro Alves', '96032767078', 'pedro@gmail.com', '31999999999');

// // Bloquear leitor pelo CPF
// blockReaderByCpf('00197659080');
