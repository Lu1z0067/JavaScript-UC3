const inputTask = document.getElementById("task")
const taskList = document.getElementById("task-list")
const btnAdd = document.getElementById("btnAdd")

function addTask(){
    // Chegando se o nome da tarefa foi digitada
    if (inputTask.value == ""){
        alert("Você precisa escrever algo!")
    }
    else{
        // CRIANDO UM <li> AQUI NO JAVASCRIPT
        // createElement = Criar TAG
        let li = document.createElement("li")
        li.innerHTML = inputTask.value

        // Limpando campo de texto
        inputTask.value = ""

        // Criando Tag do "x" de deletar tarefa
        // span = texto genêrico
        let span = document.createElement("span")
        span.innerHTML = "x"

        // Posicionando o span para dentro do <li>
        li.appendChild(span)


        // Falta Posicionar onde esse <li> novo ficará:
        // appendChild = Coloca a tag dentro de <ul>
        taskList.appendChild(li)

        // Chama a função de salvar informações
        saveData()
    }
}

btnAdd.addEventListener("click", addTask)

// Esse "e" como parâmetro
taskList.addEventListener("click", function(e){
    if (e.target.tagName == "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName == "SPAN"){
        // Se o <span> que é o "x" foi clicado
        // Então seu "parent"/"pai" que é o <li> é deletado
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// Permanência de dados
// Salvaremos as tarefas no cache no navegador
// Assim a pessoa poderá sair do site e voltar com as mesmas tarefas

// Salvar informações (Tarefas) quando for adicionado ou removido
function saveData(){
    // LocalStorage = armazenamento local (Desse PC/navegador)
    // setItem = Cria uma variavel no "hd"
    // task_data = é o nome da variavel salva no armazenamento
    // taskList.innerHTML = É o valor salvo nessa variavel "task_data"
    // taskList.innerHTML representa todos os <li> dentro (inner) do <ul> (taskList)
    localStorage.setItem("task_data", taskList.innerHTML)
}

// Ler dados ao carregar o site
function loadTasks(){
    // Ao "carregar" os dodos. Ele reescreve o taskList (o <ul>)
    // inner.HTML = Reescreve dentro do <ul>
    // getItem("task_data") = Pega o que esta salvo no armazenamento
    taskList.innerHTML = localStorage.getItem("task_data")
}

loadTasks()