const predefinidoEmail01 = "user@gmail.com";
const predefinidosenha01 = "123";

//body{
//    background: url("../imagens/backgr.png");
//    background-position: center;
//    background-size: cover;
 //   background-repeat: no-repeat;
//    min-width: 100vh;
//
//}



function login(){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    getLogin(email,password)

    if(!email || !password){
        alert("Por favor, preencha todos os campos")
        return;
    }

    if (email == predefinidoEmail01  && password == predefinidosenha01){
        alert("Login efetuado com sucesso!")
        window.location.href = "home.html"

        chamaTelaHome()
    }
    else {
        alert("Email ou senha incorretos!")
    }
    
    //se ternotar true chama home 
    

}

function buscaLivro(){

    //const codLivro = document.getElementById("code").value.trim();
    //const nomeLivro = document.getElementById("nome").value.trim();
    //const dataLivro = document.getElementById("date").value.trim();
    //const situacaoLivro = document.getElementById("status").value.trim();


   // if(codLivro != ''){

    //}
    
   // else if(){
        
    //}
    
   // else if(){
        
    //}
   // else if(){
        
   // }
    
    //else (){
        
   // }

}

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





function chamaTelaHome(){
     window.location.href = "home.html"
}
function chamaTelaControle(){
    window.location.href = "controle.html"
}
function chamaTelaCadastrarLeitores(){
    window.location.href = "cadastarr-leitores.html"
}
function chamaTelaCasdastraLivro(){
    //window.location.href = "buscaLivros.html"
}
function chamaTelaLivrosEmprestados(){
    window.location.href = "locacoes.html"
}
function cadastraUsario(){
    window.location.href = "novouser.html"
}
function getLogin(email,password){
}









