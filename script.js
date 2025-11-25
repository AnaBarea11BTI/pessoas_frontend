function init() {
    const navUL = document.querySelector("nav ul")

    const user = JSON.parse(sessionStorage.getItem("user"))

    if (user) {
        navUL.innerHTML += `
            <li>
                <a href="./pages/jogar.html">Jogar</a>
             </li>
             <li><h2>Usuário: ${user.nome}</h2></li>
             <li><button>Sair</button></li>
            
        `
        return
    }

    navUL.innerHTML += `
        <li>
            <a href="./pages/login.html">Login</a>
        </li>
    `
}

init()
