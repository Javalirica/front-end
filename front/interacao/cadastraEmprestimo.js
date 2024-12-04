// Função para realizar o empréstimo
async function cadastraEmprestimo() {
    const cpf = document.getElementById("cpfLeitor").value.trim();
    const codigoLivro = document.getElementById("codLivro").value.trim();

    if (!cpf || !codigoLivro) {
        alert("Todos os campos são obrigatórios.");
        return;
    }

    const token = localStorage.getItem("authToken");
    if (!token) {
        alert("Você precisa estar autenticado para acessar esta funcionalidade.");
        return;
    }

    const emprestimoData = { cpf, codigoLivro };

    try {
        const response = await fetch("http://3.141.87.82:8080/emprestimo/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(emprestimoData)
        });

        if (response.status === 201) {
            const emprestimoCriado = await response.json();
            console.log("Empréstimo realizado com sucesso:", emprestimoCriado);
            alert("Empréstimo realizado com sucesso!");
            // Redirecionar para a página de lista de empréstimos ou outra página desejada
            window.location.href = "buscaLocacoes.html"; // Altere para o caminho correto
        } else if (response.status === 400) {
            alert("Erro ao realizar empréstimo. Verifique os dados e tente novamente.");
        } else {
            alert(`Erro ao realizar empréstimo: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erro ao realizar empréstimo:", error);
        alert("Erro de conexão. Tente novamente.");
    }
}
