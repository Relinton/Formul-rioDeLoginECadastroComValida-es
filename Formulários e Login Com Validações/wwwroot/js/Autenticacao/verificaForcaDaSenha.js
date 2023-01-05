function verificaForcaDaSenha() {
    var passwordTextBox = document.getElementById("txtSenha");
    var password = passwordTextBox.value;
    var caracteresEspeciais = "!£$%^&*_@#~?";
    var passwordPontos = 0;

    passwordTextBox.style.color = "white";

    // Contém caracteres especiais
    for (var i = 0; i < password.length; i++) {
        if (caracteresEspeciais.indexOf(password.charAt(i)) > -1) {
            passwordPontos += 20;
            break;
        }
    }

    // Contém numeros
    if (/\d/.test(password))
        passwordPontos += 20;

    // Contém letras minúsculas
    if (/[a-z]/.test(password))
        passwordPontos += 20;

    // Contém letras maiúsculas
    if (/[A-Z]/.test(password))
        passwordPontos += 20;

    if (password.length >= 8)
        passwordPontos += 20;

    var forcaSenha = "";
    var backgroundColor = "red";

    if (passwordPontos >= 100) {
        forcaSenha = "A Senha está Forte :)";
        backgroundColor = "green";
    }
    else if (passwordPontos >= 80) {
        forcaSenha = "A Senha está Mediana";
        backgroundColor = "gray";
    }
    else if (passwordPontos >= 60) {
        forcaSenha = "A Senha está Fraca";
        backgroundColor = "maroon";
    }
    else {
        forcaSenha = "Sua senha deve ter ao mínimo 8 caracteres incluindo (Caracter especial, letras e números).";
        backgroundColor = "red";
    }

    document.getElementById("lblmensagem").innerHTML = forcaSenha;
    passwordTextBox.style.backgroundColor = backgroundColor;
}
