
function cadastraUsario(){

    var nomeUsuario = document.getElementById("nome").value.trim();
    var emailUsuario = document.getElementById("email").value.trim();
    var senhaUsuario = document.getElementById("senha");
    var valisaSenhaUsuario = document.getElementById("validaSenha");
    var tipoUsuario = document.getElementById("tipoUsuario").value.trim();

    validaCadastroUsuario(nomeUsuario,emailUsuario,senhaUsuario,valisaSenhaUsuario)

    //fazer chamada da api 

}


function validaCadastroUsuario(nomeUsuario,emailUsuario,senhaUsuario,valisaSenhaUsuario){

    if (nomeUsuario === '') {
        console.log("O campo 'Nome' é obrigatório. Por favor, preencha-o.");
    }
    
    if (emailUsuario === '') {
        console.log("O campo 'E-mail' é obrigatório. Por favor, preencha-o.");
    }
    
    if (senhaUsuario === '') {
        console.log("O campo 'Senha' é obrigatório. Por favor, preencha-o.");
    }
    
    if (valisaSenhaUsuario === '') {
        console.log("O campo 'Confirmação de Senha' é obrigatório. Por favor, preencha-o.");
    }
    
    if (valisaSenhaUsuario !== senhaUsuario) {
        console.log("As senhas não coincidem. Por favor, verifique os campos de senha.");
    }



}


// Request:
// Descrição: Criar um novo gerenciador .
// Método: Post
// Url:  3.141.87.82:8080/gerenciador/novo
// Body: 
// {
//   "nome": "guilherme Silva",
//   "role": "SUBADMIN",
//   "email": "guilherme1@gmail.com",
//   "senha": "senha123"
// }

// Exemplo de resposta: 201 -ok
// }
//   "nome": "guilherme Silva",
//   "role": "SUBADMIN",
//   "email": "guilherme1@gmail.com",
//     "senha": "$2a$10$z74TvyN4sTMPCV0NCfCYt.jJzGE9paGdcm3FYF9CWnDuIlq9YIJkq"
// }
// Erros: 
// 400: Erro ao tentar criar o administrador.
// 409: Email já cadastrado.

