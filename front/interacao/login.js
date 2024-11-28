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



document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    // Obtendo os valores do formulário
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Dados que serão enviados no corpo da requisição
    const loginData = {
      email: email,
      password: password
    };
  
    try {
      // Fazendo a requisição POST para a rota de login
      const response = await fetch('http://18.119.9.64:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
  
      // Verificando se a resposta foi bem-sucedida
      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Aqui estamos assumindo que a resposta tem um campo token
  
        // Armazenando o token para uso futuro
        localStorage.setItem('authToken', token);
  
        alert('Login bem-sucedido!');
        console.log('Token JWT:', token);
  
        // Redireciona para a página de leitores após o login bem-sucedido
        window.location.href = 'leitores.html'; // Redirecionando para a página de leitores
      } else {
        const errorData = await response.json();
        alert('Erro no login: ' + errorData.message);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
      alert('Erro ao tentar fazer login. Tente novamente mais tarde.');
    }
});