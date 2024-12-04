function cadastro() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("CPF").value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;

    adicionarNovoLeitor(nome, cpf, email, celular);
}

async function adicionarNovoLeitor(nome, cpf, email, celular) {
    const readerData = {
        nome,
        cpf,
        email,
        celular
    };

    // Recuperando o token do localStorage
    const token = localStorage.getItem('authToken');
    
    if (!token) {
        alert('Usuário não autenticado. Faça login novamente.');
        return;
    }

    try {
        const response = await fetch('http://3.141.87.82:8080/leitor/novo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adicionando o token no cabeçalho
            },
            body: JSON.stringify(readerData)
        });

        if (response.status === 201) {
            alert('Leitor adicionado com sucesso!');
            const createdReader = await response.json();
            console.log('Leitor criado:', createdReader);
            window.location.href = "home.html";
        } else if (response.status === 400) {
            alert('Erro ao salvar leitor. Verifique os dados e tente novamente.');
        } else if (response.status === 409) {
            alert('Já existe um usuário com este email.');
        }
    } catch (error) {
        console.error('Erro ao adicionar leitor:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}


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
function chamarCadastrarLeitor() {
    window.location.href = "cadastrarLeitores.html"; // Altere para o caminho correto da página
}