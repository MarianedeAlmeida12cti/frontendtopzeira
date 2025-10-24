const button =  document.querySelector("button")

button.addEventListener("click", buscarUsuarios)

function buscarUsuarios() {
    fetch("http://localhost:3333").then((response) => response.json()).then((usuarios) => console.log)
}