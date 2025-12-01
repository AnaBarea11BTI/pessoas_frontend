function init() {
    const navUL = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        navUL.innerHTML += `
            <li>
                <a href="./pages/jogar.html">Jogar</a>
             </li>
             <li><h2>Usuário: ${user.nome}</h2></li>
             <li><button id="logout" >Sair</button></li>
            
        `

        const logoutButton = document.querySelector("#logout")
        logoutButton.addEventListener("click", logout)
        return
    }

    navUL.innerHTML += `
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

function logout() {
    sessionStorage.removeItem("user")
    window.location.reload()
}

init()
