function Locacao(){

    const nomeLivro = document.getElementById("nomeLivro").value;
    const codLivro = document.getElementById("codLivro").value;
    const CPF = document.getElementById("cpfLocador").value;

    fazerLocacao(CPF,codLivro)


}
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
function chamaLocarLivro() {
    window.location.href = "locarLivro.html"; // Altere para o caminho correto da página
}