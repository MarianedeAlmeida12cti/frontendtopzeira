const button = document.querySelector("button")
button.addEventListener("click", sendUser)
const main = document.querySelector("main")

function sendUser(event) {
    event.preventDefault()
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value
    
    if (name === "" || email === "" || password === "") {
        alert("preencha todas as informações")
        return
    }

    const user = {
        name,
        email,
        password
    }

    console.log(user)
}



async function buscarUsuarios() {
    const users = await fetch("")

    //apagar section html

    users.map(user => {
        main.innerHTML += `
        <section>
            <h3>Nome: ${user.name}</h3>
            <p>Idade: ${user.age} anos</p>
            <p>Email: ${user.email}</p>
        </section>
        `
    })
}