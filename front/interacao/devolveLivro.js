
async function finalizarEmprestimo(idEmprestimo) {
    console.log("Iniciando finalização do empréstimo...");

    const token = localStorage.getItem("authToken"); // Recupera o token de autenticação do localStorage

    if (!token) {
        alert("Você precisa estar autenticado para finalizar um empréstimo.");
        console.error("Token de autenticação não encontrado.");
        return;
    }

    try {
        const response = await fetch(`http://3.141.87.82:8080/emprestimo/${idEmprestimo}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        console.log("Status da resposta:", response.status);

        if (response.status === 204) {
            const leitor = await response.json(); // Retorna o objeto do leitor
            alert("Empréstimo finalizado com sucesso!");
            console.log("Detalhes do leitor:", leitor);
        } else if (response.status === 400) {
            alert("Erro interno ao finalizar empréstimo. Tente novamente.");
            console.error("Erro 400: Erro interno.");
        } else if (response.status === 404) {
            alert("Empréstimo não encontrado pelo ID informado.");
            console.error("Erro 404: Empréstimo não encontrado.");
        }
    } catch (error) {
        console.error("Erro ao finalizar empréstimo:", error);
        alert("Erro de conexão. Tente novamente.");
    }
}

// Exemplo de chamada da função
function chamaFinalizarEmprestimo() {

    var idEmprestimo = document.getElementById("idLocacao").value;
    console.log(idEmprestimo)
    if (idEmprestimo !=""){
        finalizarEmprestimo(idEmprestimo);

    }
    else {
        alert("Favor Preencher uma Locação a ser finalizado");
    }
        
    
}