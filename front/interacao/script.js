const predefinidoEmail01 = "user@gmail.com";
const predefinidosenha01 = "123";


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

function chamaTelaHome(){
     window.location.href = "home.html"
}
function chamaTelaControle(){
    window.location.href = "controle.html"
}
function chamaTelaCadastrarLeitores(){
    window.location.href = "cadastarr-leitores.html"
}
function chamaTelaTodosOsLivros(){
    window.location.href = "todososlivros.html"
}




function getLogin(email,password){




}

function buscaLivro(){




}

function cadastraUsario(){




}








