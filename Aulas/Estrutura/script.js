// Criando variáveis
let nome_site = "Combustivel++"
let anoLancamento = 2026

// prompt() == input()
// Number() = Converte para número
// Pois o prompt retorna como "string" que é texto

// alert = saída de dados(Igual ao print)
alert("Bem vindo ao sistema " + nome_site)
alert("Lançado em " + anoLancamento)

let precoGasolina = Number(prompt("Digite o valor da Gasolina: "))

let precoEtanol = Number(prompt("Digite o valor do Etanol: "))

// Só compensa pegar etanol se o preço do litro for menor ou igual a 70% do preço do litro da gasolina

// Por exemplo. Se a gasolina for 0.80 só compensa pegar etanol se o preço dele for 4.75 ou menos

let porcentagem = precoEtanol / precoGasolina

if (porcentagem <= 0.7){
    // compensa etanol
    alert("Neste caso o valor do Etanol é " + (porcentagem*100) + "% do valor da Gasolina")
    document.write("<h1>Use Etanol</h1>")
}
else{
    document.white("<h1>Use a Gasolina</h1>")
    alert("O valor do Etanol é mais de 70% do valor da Gasolina")
}