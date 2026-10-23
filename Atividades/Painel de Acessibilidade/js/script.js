const tagAumentar = document.getElementById("aumentar");
const tagDiminuir = document.getElementById("diminuir");
const tagCor = document.getElementById("cor");

let clicks = 0

function Aumentar(){
    document.querySelector(".texto>h1").style.fontSize = "50px";
    alert("A função 'Aumentar()' foi usada!");
}

tagDiminuir.addEventListener ('click', function(){
    document.querySelector(".texto>h1").style.fontSize = "30px";
    alert("A função 'Diminuir()' foi usada!");
})

tagCor.addEventListener ('click', () => {
    clicks++

    if (clicks % 2 == 0){
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        document.querySelector("body").style.backgroundColor = "darkblue";
    }

})

