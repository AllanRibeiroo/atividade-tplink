var botaoEntrar = document.getElementById("button-submit")

function login() {
    var campoUsuario = document.getElementById("usuario").value

    var campoSenha = document.getElementById("password").value

    var campoCodigo = document.getElementById("codigo").value


    if( campoUsuario == "admin" && campoSenha == "1234" && campoCodigo == "tplink2025") {
        window.location.replace("painel.html")
    }else{
        alert("OPS! Você errou email e senha.")
    }

    console.log("Funcionou o login")

}
botaoEntrar.addEventListener("click",login)