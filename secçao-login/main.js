function login() {
    var user = document.getElementById("usuario").value;
    var pass = document.getElementById("senha").value;
    
    // Verificar se o nome de usuário e a senha estão corretos
    if (user=== "0318" && pass === "1234") {
      alert("Login bem-sucedido!");
      // Redirecionar para a página de sucesso ou realizar outras ações
      window.location.href = "pagcolaborador.html"
      localStorage.setItem("username", user)
      localStorage.setItem("password", pass)
    } else {
      alert("Nome de usuário ou senha inválidos!");
    }
  }

  var savedusername = localStorage.getItem("username")
  var savedpassword = localStorage.getItem("password")