function openModal(cupcake) {
    var pop_nome = document.getElementById("nome")
    var pop_desc = document.getElementById("descricao")
    var pop_prec = document.getElementById("preco")
    var pop_up = document.getElementById("pop-up")
    switch (cupcake) {
        case "CupFlavor1":
            pop_nome.innerHTML = "CHOCOLATE CHOCOLATE"
            pop_desc.innerHTML = "A melhor opção para amantes de chocolate"
            pop_prec.innerHTML = "15,00 "
            break;
        case "CupFlavor2":
            pop_nome.innerHTML = "RASPBERRY CHOCOLATE"
            pop_desc.innerHTML = "Conjutno de frutas citricas"
            pop_prec.innerHTML = "19,00 "
            break;
        case "CupFlavor3":
            pop_nome.innerHTML = "MINT DOUBLE CHOCOLATE"
            pop_desc.innerHTML = "Suave e refrescante"
            pop_prec.innerHTML = "23,00 "
            break;
        case "CupFlavor4":
            pop_nome.innerHTML = "RAINBOW VANILLA"
            pop_desc.innerHTML = "Para quem quer novos sabores"
            pop_prec.innerHTML = "18,00 "
            break;
        case "CupFlavor5":
            pop_nome.innerHTML = "RED VELVET"
            pop_desc.innerHTML = "Leve e refinado"
            pop_prec.innerHTML = "20,00 "
            break;
        case "CupFlavor6":
            pop_nome.innerHTML = "COOKIES AND CREAM"
            pop_desc.innerHTML = "Uma experiência crocante"
            pop_prec.innerHTML = "25,00 "
            break;
        
    }
    pop_up.style.visibility = 'visible'
}

function botaoVisibel() {
    var pop_up = document.getElementById("pop-up")
    pop_up.style.visibility = 'hidden'
}