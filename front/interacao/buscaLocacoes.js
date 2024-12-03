// Função para buscar todos os empréstimos ativos com autenticação
async function buscaLocacoes() {
    const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para acessar esta página.');
        return;
    }

    try {
        const response = await fetch('http://3.141.87.82:8080/emprestimo/todos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            }
        });

        if (response.ok) {
            const emprestimos = await response.json();
            console.log('Lista de empréstimos ativos:', emprestimos);
        } else if (response.status === 400) {
            alert('Erro interno no servidor. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error('Erro ao buscar empréstimos ativos:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}
