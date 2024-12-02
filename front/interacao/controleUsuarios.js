// // Request:
// // Descrição: Criar um novo gerenciador .
// // Método: Post
// // Url:  3.141.87.82:8080/gerenciador/novo
// // Body: 
// // {
// //   "nome": "guilherme Silva",
// //   "role": "SUBADMIN",
// //   "email": "guilherme1@gmail.com",
// //   "senha": "senha123"
// // }

// // Exemplo de resposta: 201 -ok
// // }
// //   "nome": "guilherme Silva",
// //   "role": "SUBADMIN",
// //   "email": "guilherme1@gmail.com",
// //     "senha": "$2a$10$z74TvyN4sTMPCV0NCfCYt.jJzGE9paGdcm3FYF9CWnDuIlq9YIJkq"
// // }
// // Erros: 
// // 400: Erro ao tentar criar o administrador.
// // 409: Email já cadastrado.



// //  Request:
// // Descrição: Bucar Todos Gerenciadores.
// // Método: Get
// // Url:  3.141.87.82:8080/gerenciador/todos
// // Body:  (Vazio)

// // Exemplo de resposta: 200 -ok
// // {
// //   lista de  obj do gerenciador como exemplos acima 
// // }
// // Erros: 
// // 500: Internal Server Error .

// // Função para criar um novo gerenciador
// async function createManager(nome, role, email, senha) {
//     const managerData = {
//         nome,
//         role,
//         email,
//         senha
//     };

//     try {
//         const response = await fetch('http://3.141.87.82:8080/gerenciador/novo', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(managerData)
//         });

//         if (response.status === 201) {
//             alert('Gerenciador criado com sucesso!');
//             const createdManager = await response.json();
//             console.log('Gerenciador criado:', createdManager);
//         } else if (response.status === 400) {
//             alert('Erro ao tentar criar o gerenciador. Verifique os dados e tente novamente.');
//         } else if (response.status === 409) {
//             alert('O email informado já está cadastrado.');
//         }
//     } catch (error) {
//         console.error('Erro ao criar o gerenciador:', error);
//         alert('Erro de conexão. Tente novamente mais tarde.');
//     }
// }

// // Função para buscar todos os gerenciadores
// async function fetchAllManagers() {
//     try {
//         const response = await fetch('http://3.141.87.82:8080/gerenciador/todos', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });

//         if (response.status === 200) {
//             const managers = await response.json();
//             console.log('Lista de gerenciadores:', managers);
//             alert('Gerenciadores carregados com sucesso. Verifique o console para detalhes.');
//         } else if (response.status === 500) {
//             alert('Erro interno do servidor ao buscar os gerenciadores.');
//         }
//     } catch (error) {
//         console.error('Erro ao buscar gerenciadores:', error);
//         alert('Erro de conexão. Tente novamente mais tarde.');
//     }
// }

// // Exemplo de chamada das funções

// // Criar um novo gerenciador
// createManager('Guilherme Silva', 'SUBADMIN', 'guilherme1@gmail.com', 'senha123');

// // Buscar todos os gerenciadores
// fetchAllManagers();







