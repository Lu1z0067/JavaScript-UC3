const tagBtn1 = document.getElementById("btn1");
const tagBtn2 = document.getElementById("btn2");
const tagBtn3 = document.getElementById("btn3");
const tagReset = document.getElementById("reset");

let pontos = 0

function responder(correta){
    if (correta == true){
        pontos++
        document.querySelector("#btn2").style.backgroundColor = "yellowgreen"
        points.innerHTML = pontos
    }
    else{
        document.querySelector("#btn1").style.backgroundColor = "darkred"
        document.querySelector("#btn3").style.backgroundColor = "darkred"
    }

}

tagBtn1.addEventListener('click', () => responder(false))
tagBtn2.addEventListener('click', () => responder(true))
tagBtn3.addEventListener('click', () => responder(false))

tagReset.addEventListener('click', () => {
    pontos = 0
    points.innerHTML = pontos
    document.querySelectorAll("#btn1, #btn2, #btn3").forEach(btn => {
        btn.style.backgroundColor = "gainsboro"
    })
})