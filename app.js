var altura = 0
var largura = 0
var vidas = 0
var tempo = 10

var criaMosquitoTempo = 1500

var nivel = location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
    //1500
    criaMosquitoTempo = 1500

} else if (nivel === 'dficil') {
    //1000
    criaMosquitoTempo = 900

} else if (nivel === 'chuckN') {
    //750
    criaMosquitoTempo = 750
}

function ajustaTamanhaPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhaPalcoJogo()

var cronometro = setInterval(function() {
    tempo--
    
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        location.href = 'vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000);

function posicaoRandomica() {
    //remover o mosquito anterio caso ainda exista
    if (document.getElementById('mosquito')) {  
        document.getElementById('mosquito').remove()

        if (vidas == 3) {
            
            window.location.href = 'fim_jogo.html'

        } else {
            vidas++
            document.getElementById('v' + vidas).src = 'img/imagens/coracao_vazio.png'
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //create element 
    var mosquito = document.createElement('img')

    mosquito.src = 'img/imagens/moquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }

    document.body.appendChild(mosquito)
}

function tamanhoAleatorio() {
    var tamanho = Math.floor(Math.random() * 3)
    console.log(tamanho)

    switch(tamanho) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    console.log(lado)

    switch(lado) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}