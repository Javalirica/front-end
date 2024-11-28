
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