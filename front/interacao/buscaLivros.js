

async function buscaLivrosPorNome(nome) {
    const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para acessar esta página.');
        return;
    }

    try {
        const response = await fetch(`http://3.141.87.82:8080/v1/livro/nome?nome=${encodeURIComponent(nome)}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            }
        });

        if (response.ok) {
            const livros = await response.json();
            console.log('Lista de livros com o nome:', livros);
        } else if (response.status === 500) {
            alert('Erro interno no servidor. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error('Erro ao buscar livros por nome:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

// Função para buscar todos os livros com autenticação
async function buscaTodosLivro() {
    const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para acessar esta página.');
        return;
    }

    try {
        const response = await fetch('http://3.141.87.82:8080/v1/livro/todos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            }
        });

        if (response.ok) {
            const livros = await response.json();
            console.log('Lista de todos os livros:', livros);
        } else if (response.status === 500) {
            alert('Erro interno no servidor. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error('Erro ao buscar todos os livros:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}


