function addPlayer() {
    const position = document.getElementById('position').value

    const prancheta = document.getElementById('div_prancheta')
    const ulp = document.createElement('ul')
    const lip = document.createElement('li')
    
    lip.id = 'player' + position
    lip.innerText = position + 'numero tal'
    
    ulp.appendChild(lip)
    prancheta.appendChild(ulp)

    document.getElementById('position').value = ''
}


function removePlayer() {
    const remover = document.getElementById('playerRemove').value
    const playerRemove = document.getElementById('player' + position)

    playerRemove.remove()
    document.getElementById('playerRemove').value = ''
}





//function removePlayer() {
    //const remover = document.getElementById('playerRemove').value
    //const playerRemove = document.getElementById('player' + position)

    //document.getElementById('position').removeChild(playerRemove)
    //document.getElementById('playerRemove').value = ''
//}




//function addPlayer() {
// const position = document.getElementById('position').value
// window.alert(position)
//
// const prancheta = document.getElementById('div_prancheta')
// const ulp = document.createElement('ul')
// const lip = document.createElement('li')
//
// lip.innerText = position + 'numero tal'
//
// prancheta.appendChild(lip)
//
// document.getElementById('position').value = ""
//}

