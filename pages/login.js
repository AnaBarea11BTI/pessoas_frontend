const button = document.querySelector("button")

button.onclick = (event) => {
    event.preventDefault()
    login()
}

async function login(){
    const email = document.querySelector("#email").value
    const password = document.querySelector("#senha").value

    const user = {
        email,
        password
    }

    const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user })
    }).then(response => response.json())

    console.log(response)

    if (response.message) {
        alert(response.message)
        return
    }

    const { id, nome } = response
    
    sessionStorage.setItem("user", JSON.stringify({id, nome}))

     alert("Login realizado com sucesso!")

    window.location.href = "../index.html"
}