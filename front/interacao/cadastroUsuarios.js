function cadastraUsario() {
    console.log("O campo 'Nome' é obrigatório. Por favor, preencha-o.");
    var nomeUsuario = document.getElementById("nome").value.trim();
    var emailUsuario = document.getElementById("email").value.trim();
    var senhaUsuario = document.getElementById("senha").value.trim();
    var valisaSenhaUsuario = document.getElementById("validaSenha").value.trim();
    var tipoUsuario = document.getElementById("tipoUsuario").value.trim();

    // Validação de campos
    if (!validaCadastroUsuario(nomeUsuario, emailUsuario, senhaUsuario, valisaSenhaUsuario)) {
        return; // Se a validação falhar, não continua com o cadastro
    }

    // Fazer a chamada da API para cadastro, passando os dados do novo usuário
    createManager(nomeUsuario, tipoUsuario, emailUsuario, senhaUsuario);
}

function validaCadastroUsuario(nomeUsuario, emailUsuario, senhaUsuario, valisaSenhaUsuario) {
    let isValid = true;

    if (nomeUsuario === '') {
        console.log("O campo 'Nome' é obrigatório. Por favor, preencha-o.");
        isValid = false;
    }

    if (emailUsuario === '') {
        console.log("O campo 'E-mail' é obrigatório. Por favor, preencha-o.");
        isValid = false;
    }

    if (senhaUsuario === '') {
        console.log("O campo 'Senha' é obrigatório. Por favor, preencha-o.");
        isValid = false;
    }

    if (valisaSenhaUsuario === '') {
        console.log("O campo 'Confirmação de Senha' é obrigatório. Por favor, preencha-o.");
        isValid = false;
    }

    if (valisaSenhaUsuario !== senhaUsuario) {
        console.log("As senhas não coincidem. Por favor, verifique os campos de senha.");
        isValid = false;
    }

    return isValid;
}

async function createManager(nome, role, email, senha) {
    // Recuperando o token do localStorage
    const token = localStorage.getItem('authToken');
    
    if (!token) {
        alert('Usuário não autenticado. Faça login novamente.');
        return;
    }

    const managerData = {
        nome,
        role,
        email,
        senha
    };

    try {
        const response = await fetch('http://3.141.87.82:8080/gerenciador/novo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Adicionando o token no cabeçalho
            },
            body: JSON.stringify(managerData)
        });

        if (response.status === 201) {
            alert('Gerenciador criado com sucesso!');
            const createdManager = await response.json();
            console.log('Gerenciador criado:', createdManager);
        } else if (response.status === 400) {
            alert('Erro ao tentar criar o gerenciador. Verifique os dados e tente novamente.');
        } else if (response.status === 409) {
            alert('O email informado já está cadastrado.');
        }
    } catch (error) {
        console.error('Erro ao criar o gerenciador:', error);
        alert('Erro de conexão. Tente novamente mais tarde.');
    }
}
