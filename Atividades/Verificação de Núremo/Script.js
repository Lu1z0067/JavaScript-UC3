let num = Number(prompt("Digite um número: "))

function eh_positivo(){
    if (num >= 1){
        document.write("<p>É positivo!</p>")
    }
    else if (num < 0){ // "else if" = elif
        document.write("<p>É negativo!</p>")
    }
    else{
        document.write("<p>É zero!</p>")
    }
}

eh_positivo(num)