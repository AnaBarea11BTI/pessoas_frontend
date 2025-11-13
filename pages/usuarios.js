const main = document.querySelector("main")


async function receberMensagemDoBackend() {
    const response = await fetch("http://localhost:3333").then(response => response.json())

    response.map((person) => {
        main.innerHTML += `
            <section>
                <h2>Nome: ${person.nome}</h2>
                <p>Email: ${person.email}<p>
            </section>
        `
    })
}

receberMensagemDoBackend()