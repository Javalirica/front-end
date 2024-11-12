const predefinidoEmail01 = "user@gmail.com";
const predefinidosenha01 = "123";


function login(){
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!email || !password){
        alert("Por favor, preencha todos os campos")
        return;
    }

    if (email == predefinidoEmail01  && password == predefinidosenha01){
        alert("Login efetuado com sucesso!")
        window.location.href = "home.html"
    }
    else {
        alert("Email ou senha incorretos!")
    }
}