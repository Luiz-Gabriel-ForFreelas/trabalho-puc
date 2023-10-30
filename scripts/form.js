var url = window.location.href;  
var iguais = []
var es = []

for (let cont = 0 ; cont != url.length ; cont++) {
    if (url[cont] == "=") {
        iguais.push(cont)
    } if (url[cont] == "&") {
        es.push(cont)
    }
}

// FORMATAR NOME

var nome_var = url.substring(iguais[0], es[0])
nome_var = nome_var.replace("=", "")
var nome_fim = ""

for (let cont = 0; cont != nome_var.length ; cont++) {

    if (nome_var[cont] == "+"){
        nome_fim += " "
    } else {
        nome_fim += nome_var[cont]
    }
}

// FORMATAR EMAIL

var email_var = url.substring(iguais[1], es[1])
email_var = email_var.replace("=", "")
var email_fim = ""

for (let cont = 0; cont != email_var.length ; cont++) {

    if (email_var[cont] == "+"){
        email_fim += " "
    } else {
        email_fim += email_var[cont]
    }
}

var email_per = email_fim.indexOf("%")
var email_fim_replace = ""
email_fim_replace += email_fim.substring(0, email_per)
email_fim_replace += "@"
email_fim_replace += email_fim.substring((email_per + 3), email_fim.length)

// FORMATAR NUMERO

var num_var = url.substring(iguais[2], es[2])
num_var = num_var.replace("=", "")
var num_fim = ""

for (let cont = 0; cont != num_var.length ; cont++) {

    if (num_var[cont] == "+"){
        num_fim += " "
    } else {
        num_fim += num_var[cont]
    }
}

var num_fim_replace = ""
num_fim_replace += "("
num_fim_replace += num_fim.substring(3, 5)
num_fim_replace += ") "
num_fim_replace += num_fim.substring(9, num_fim.length)

// FORMATAR DATA

var data_var = url.substring(iguais[3], es[3])
data_var = data_var.replace("=", "")
var data_fim = ""

for (let cont = 0; cont != data_var.length ; cont++) {

    if (data_var[cont] == "+"){
        data_fim += " "
    } else {
        data_fim += data_var[cont]
    }
}

// FORMATAR CHECKBOX

var box_var = url.substring(iguais[4], es[4])
box_var = box_var.replace("=", "")
var box_fim = ""

for (let cont = 0; cont != box_var.length ; cont++) {

    if (box_var[cont] == "+"){
        box_fim += " "
    } else {
        box_fim += box_var[cont]
    }
}

// ALTERAR VALORS DA TABLEA

var text_nome = document.getElementById("nome")
var text_email = document.getElementById("email")
var text_celular = document.getElementById("telefone")
var text_data = document.getElementById("nascimento")
var text_check = document.getElementById("agree-term")

text_nome.innerHTML = nome_fim
text_email.innerHTML = email_fim_replace
text_celular.innerHTML = num_fim_replace
text_data.innerHTML = data_fim
text_check.innerHTML = box_fim