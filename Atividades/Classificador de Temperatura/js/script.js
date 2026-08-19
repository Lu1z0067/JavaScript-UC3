let tagTemp = document.getElementById("temp")
let tagCidade = document.getElementById("cidade")

function classificar(){

    // Detalhes para o campo de preenchimento 

    let temp = Number(tagTemp.value)
    let cidade = tagCidade.value

    if (cidade == "" && temp == "") {
        alert("Por favor, preencha os campos!")
        return
    }
    else if (cidade == "" || temp == "") {
        alert("Por favor, preencha o campo!")
        return
    }

    // Classificador de Temperatura

    let tagClass = document.querySelector("#resultado")
    let tagDados = document.getElementById("dados")
    let tagBody = document.querySelector("body")

    if (temp <= 10) {
        tagClass.innerHTML = `
        <div>
            <h2>Dados</h2>

            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Temperatura:</strong> ${temp} °C</p>
            <p><strong>Situação:</strong> Muito frio!</p>
        </div>    
        `
        tagBody.style.backgroundImage = "none"
        tagBody.style.backgroundColor = "blue"
        tagDados.style.backgroundColor = "white"
        return
    }
    else if (temp <= 19) {
        tagClass.innerHTML = `
        <div>
            <h2>Dados</h2>

            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Temperatura:</strong> ${temp} °C</p>
            <p><strong>Situação:</strong> Frio!</p>
        </div>    
        `
        tagBody.style.backgroundImage = "none"
        tagBody.style.backgroundColor = "turquoise" 
        tagDados.style.backgroundColor = "white"
        return
    }
    else if (temp <= 29) {
        tagClass.innerHTML = `
        <div>
            <h2>Dados</h2>

            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Temperatura:</strong> ${temp} °C</p>
            <p><strong>Situação:</strong> Agradável!</p>
        </div>    
        `
        tagBody.style.backgroundColor = "yellowgreen"
        tagDados.style.backgroundColor = "white"
        return
    }
    else if (temp <= 39) {
        tagClass.innerHTML = `
        <div>
            <h2>Dados</h2>

            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Temperatura:</strong> ${temp} °C</p>
            <p><strong>Situação:</strong> Quente!</p>
        </div>    
        `
        tagBody.style.backgroundImage = "none"
        tagBody.style.backgroundColor = "yellow" 
        tagDados.style.backgroundColor = "white"
        return
    }
    else if (temp >= 40) {
        tagClass.innerHTML = `
        <div>
            <h2>Dados</h2>

            <p><strong>Cidade:</strong> ${cidade}</p>
            <p><strong>Temperatura:</strong> ${temp} °C</p>
            <p><strong>Situação:</strong> Muito quente!</p>
        </div>    
        `
        tagBody.style.backgroundImage = "none"
        tagBody.style.backgroundColor = "red" 
        tagDados.style.backgroundColor = "white"
        return
    }

}