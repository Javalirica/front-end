
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
// URL da sua API
// Função para buscar e exibir todos os livros
async function fetchAllBooks() {
    try {
        const token = localStorage.getItem('authToken'); // Obtém o token do localStorage

        if (!token) {
            alert('Token de autenticação não encontrado. Faça login novamente.');
            return;
        }

        const response = await fetch('http://3.141.87.82:8080/v1/livro/todos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`, // Inclui o token no cabeçalho
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            const livros = await response.json();
            console.log('Lista de todos os livros:', livros); // Apenas para depuração
            exibirLivros(livros); // Exibe os livros na página
        } else if (response.status === 401) {
            alert('Não autorizado. Faça login novamente.');
            console.error('Erro 401: Não autorizado');
        } else if (response.status === 500) {
            alert('Erro interno no servidor. Tente novamente mais tarde.');
            console.error('Erro 500: Erro interno');
        } else {
            alert(`Erro ao buscar livros: ${response.statusText}`);
            console.error(`Erro: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Erro ao buscar todos os livros:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

// Função para exibir os livros no DOM
function exibirLivros(livros) {
    const listaLivrosDiv = document.getElementById("lista-livros-tabela");
    listaLivrosDiv.innerHTML = ""; // Limpa conteúdo anterior

    if (livros.length === 0) {
        listaLivrosDiv.innerHTML = "<p>Nenhum livro disponível.</p>";
        return;
    }

    const tabela = document.createElement("table");
    tabela.classList.add("tabela-livros");

    // Cabeçalho da tabela
    tabela.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Código</th>
                <th>Autor</th>
                <th>Categoria</th>
                <th>Disponível</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = tabela.querySelector("tbody");

    // Preenchendo os dados
    livros.forEach(livro => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${livro.id}</td>
            <td>${livro.nome}</td>
            <td>${livro.codigoLivro}</td>
            <td>${livro.autor}</td>
            <td>${livro.categoria}</td>
            <td>${livro.disponivel ? "Sim" : "Não"}</td>
        `;

        tbody.appendChild(tr);
    });

    listaLivrosDiv.appendChild(tabela);
}

// Chamando a função ao carregar a página
document.addEventListener("DOMContentLoaded", fetchAllBooks);