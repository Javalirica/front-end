
// buscaTodosLeitores();


// buscaLeitorCPF('00197659080');


// buscaLeitorCPFEmail('00197659080', 'cr7@gmail.com');


async function buscaTodosLeitores() {
    const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para acessar esta página.');
        return;
    }

    try {
        const response = await fetch('http://3.141.87.82:8080/leitor/todos', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            }
        });

        if (response.ok) {
            const leitores = await response.json();
            console.log('Lista de leitores:', leitores);
        } else if (response.status === 500) {
            alert('Erro interno no servidor. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error('Erro ao buscar todos os leitores:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

// Função para buscar leitor por CPF com autenticação
async function buscaLeitorCPF(cpf) {
    const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para acessar esta página.');
        return;
    }

    try {
        const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            }
        });

        if (response.ok) {
            const leitor = await response.json();
            console.log('Leitor encontrado:', leitor);
        } else if (response.status === 404) {
            alert('Leitor não encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar leitor por CPF:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

// Função para atualizar leitor por CPF com autenticação
async function buscaLeitorCPFEmail(cpf, email) {
    const token = localStorage.getItem('authToken');  // Recupera o token do localStorage

    if (!token) {
        alert('Você precisa estar autenticado para acessar esta página.');
        return;
    }

    const updateData = {
        email: email
    };

    try {
        const response = await fetch(`http://3.141.87.82:8080/leitor/${cpf}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`  // Passa o token no cabeçalho de autorização
            },
            body: JSON.stringify(updateData)
        });

        if (response.status === 204) {
            alert('Leitor atualizado com sucesso!');
        } else if (response.status === 404) {
            alert('Leitor não encontrado.');
        } else if (response.status === 409) {
            alert('Já existe um usuário com este email.');
        }
    } catch (error) {
        console.error('Erro ao atualizar leitor:', error);
        alert('Erro de conexão. Tente novamente.');
    }
}

