//Definir a dimensão da tela conforme for alterada
let altura = 0
let largura = 0
let vidas = 1

function dimensao() {
    altura = window.innerHeight
    largura = window.innerWidth

    //console.log(largura, altura)
}

dimensao()

//Definir os eixos X e Y que a imagem do "mosquito" irá percorrer dentro de um intervalo de tempo
setInterval(() => {
    let idMosquito = document.getElementById("mosquito")
    if(idMosquito) {
        idMosquito.remove()

        if(vidas > 3) {
            window.location.href = "../app-mata-mosquito/gameOver.html"
        } else {
            let idVidas = document.getElementById(`v${vidas}`)
            idVidas.src = "../app-mata-mosquito/img/coracao_vazio.png"
            vidas++
        }
    }

    let posicaoX = Math.floor(Math.random() * largura) - 100
    posicaoX = posicaoX < 0 ? 0 : posicaoX

    let posicaoY = Math.floor(Math.random() * altura) - 100
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    //console.log(posicaoX, posicaoY)

    //Criar o elemento HTML
    let mosquito = document.createElement("img")

    //Adicionar estilos
    mosquito.src = "../app-mata-mosquito/img/mosquito.png"
    mosquito.className = `${tamanho()} ${lado()}`
    mosquito.style.top = `${posicaoY}px`
    mosquito.style.left = `${posicaoX}px`
    mosquito.style.position = "absolute"
    mosquito.id = "mosquito"
    mosquito.onclick = () => mosquito.remove()

    document.body.appendChild(mosquito)
    //console.log(tamanho())
}, 2000)

//Definir uma classe (tamanho do mosquito) com base no número randômico
function tamanho() {
    let classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return "mosquito1"
        
        case 1:
            return "mosquito2"

        case 2:
            return "mosquito3"
    }
}

//Definir uma classe (lado do mosquito) com base no número randômico
function lado() {
    let classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0:
            return "ladoA"

        case 1:
            return "ladoB"
    }
}