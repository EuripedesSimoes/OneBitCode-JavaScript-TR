function velBotao () {
    const vel = document.getElementById('txtvel').value
    const res = document.getElementById('resultado')


    const mm = document.getElementById('maior_menor')

    res.innerText = 'O resultado é '+vel

    if (vel >= 0) {
        mm.innerHTML = '<strong>O número '+vel+' é positivo</strong>'
    }
    else {alert('Número negativo')}
}