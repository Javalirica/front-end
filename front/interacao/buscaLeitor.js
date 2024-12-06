let paginaAtualLeitores = 1; // Controla a página atual para os leitores
const leitoresPorPagina = 5; // Limite de leitores por página

// Função para buscar todos os leitores
async function buscaTodosLeitores() {
    try {
        const token = localStorage.getItem("authToken"); // Recupera o token do localStorage

        if (!token) {
            alert("Token de autenticação não encontrado. Faça login novamente.");
            return;
        }

        const response = await fetch("http://3.141.87.82:8080/leitor/todos", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`, // Passa o token no cabeçalho de autorização
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const leitores = await response.json();
            console.log("Lista de leitores:", leitores);

            // Paginação
            const leitoresPaginados = leitores.slice(
                (paginaAtualLeitores - 1) * leitoresPorPagina,
                paginaAtualLeitores * leitoresPorPagina
            );

            exibirLeitores(leitoresPaginados);
        } else if (response.status === 401) {
            alert("Não autorizado. Faça login novamente.");
            console.error("Erro 401: Não autorizado");
        } else if (response.status === 500) {
            alert("Erro interno no servidor. Tente novamente mais tarde.");
            console.error("Erro 500: Erro interno no servidor");
        } else {
            alert(`Erro ao buscar leitores: ${response.statusText}`);
            console.error(`Erro ${response.status}: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erro ao buscar todos os leitores:", error);
        // alert("Erro de conexão. Tente novamente.");
    }
}

// Função para exibir os leitores no DOM
function exibirLeitores(leitores) {
    const listaLeitoresDiv = document.getElementById("lista-leitores-tabela");
    if (!listaLeitoresDiv) {
        console.error("Elemento com ID 'lista-leitores-tabela' não encontrado.");
        return;
    }

    const botaoProximo = document.getElementById("botao-proximo-leitores");
    listaLeitoresDiv.innerHTML = ""; // Limpa conteúdo anterior

    if (leitores.length === 0) {
        listaLeitoresDiv.innerHTML = "<p>Nenhum leitor encontrado.</p>";
        botaoProximo.style.display = "none"; // Oculta o botão se não houver leitores
        return;
    }

    const tabela = document.createElement("table");
    tabela.classList.add("tabela-leitores");

    // Cabeçalho da tabela
    tabela.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = tabela.querySelector("tbody");

    // Preenchendo os dados
    leitores.forEach((leitor) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${leitor.id}</td>
            <td>${leitor.nome}</td>
             <td>${leitor.cpf}</td>
            <td>${leitor.email}</td>
            <td>${leitor.celular}</td>
            <td>${leitor.ativo ? "Ativo" : "Inativo"}</td>
        `;

        tbody.appendChild(tr);
    });

    listaLeitoresDiv.appendChild(tabela);

    // Oculta o botão "Próximo" se houver menos de 5 leitores
    if (leitores.length < leitoresPorPagina) {
        botaoProximo.style.display = "none";
    } else {
        botaoProximo.style.display = "inline-block"; // Mostra o botão se houver mais páginas
    }
}

// Função para avançar a página
function proximaPaginaLeitores() {
    paginaAtualLeitores++;
    buscaTodosLeitores();

    // Mostra o botão de voltar
    document.getElementById("botao-voltar-leitores").style.display = "inline-block";
}

// Função para voltar à página anterior
function paginaAnteriorLeitores() {
    if (paginaAtualLeitores > 1) {
        paginaAtualLeitores--;
        buscaTodosLeitores();
    }

    // Oculta o botão de voltar se estiver na primeira página
    if (paginaAtualLeitores === 1) {
        document.getElementById("botao-voltar-leitores").style.display = "none";
    }
}

// Função para buscar leitor por CPF com autenticação
async function buscaLeitorCPF() {
    console.log("teste")
    const token = localStorage.getItem("authToken");  // Recupera o token do localStorage

    if (!token) {
        alert("Você precisa estar autenticado para acessar esta página.");
        return;
    }

    try {
        const cpf = document.getElementById("cpfLeitor").value; // Recupera o CPF inserido pelo usuário
        if (!cpf) {
            alert("Por favor, insira o CPF do leitor.");
            return;
        }

        const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            }
        });

        if (response.ok) {
            const leitor = await response.json();
            console.log("Leitor encontrado:", leitor);
            exibirLeitor(leitor);  // Exibe o leitor encontrado
        } else if (response.status === 404) {
            alert("Leitor não encontrado.");
        } else {
            alert(`Erro ao buscar o leitor: ${response.statusText}`);
        }
    } catch (error) {
        console.error("Erro ao buscar leitor por CPF:", error);
        alert("Erro de conexão. Tente novamente.");
    }
}

// Função para exibir o leitor encontrado na tela
function exibirLeitor(leitor) {
    const leitorDiv = document.getElementById("lista-leitores-tabela");
   
    if (!leitorDiv) {
        console.error("Elemento com ID 'leitor-encontrado' não encontrado.");
        return;
    }

    leitorDiv.innerHTML = `
        <h3>Detalhes do Leitor</h3>
        <p><strong>ID:</strong> ${leitor.id}</p>
        <p><strong>Nome:</strong> ${leitor.nome}</p>
        <p><strong>Email:</strong> ${leitor.email}</p>
        <p><strong>Telefone:</strong> ${leitor.celular}</p>
        <p><strong>Status:</strong> ${leitor.ativo ? "Ativo" : "Inativo"}</p>
    `;
}
