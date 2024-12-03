
async function fazerLocacao(cpf, bookCode) {
    const token = localStorage.getItem('authToken');  // Recupera o token de autenticação do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para realizar um empréstimo.');
        return;
    }

    const loanData = {
        cpf: cpf,
        codigoLivro: bookCode
    };

    try {
        const response = await fetch('http://3.141.87.82:8080/emprestimo/save', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Envia o token no cabeçalho de autorização
            },
            body: JSON.stringify(loanData)
        });

        if (response.status === 200) {
            const data = await response.json();
            alert('Empréstimo realizado com sucesso!');
            console.log('Detalhes do empréstimo:', data);
        } else if (response.status === 400) {
            alert('Livro indisponível para empréstimo.');
        } else if (response.status === 404) {
            alert('Livro não encontrado pelo código informado.');
        }
    } catch (error) {
        console.error('Erro ao realizar empréstimo:', error);
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
}

// // Exemplo de chamada da função
// // Realizar empréstimo com CPF "81010557033" e código do livro "ssa01"
// makeLoan('81010557033', 'ssa01');
