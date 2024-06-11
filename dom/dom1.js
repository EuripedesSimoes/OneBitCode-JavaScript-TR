//Funções de aparecer mensagem de clicar e sair na div
function clique1(){
    let clique = document.getElementById('clicar')
    clique.innerText = 'Clicou'
}
function sair(){
    let sair1 = document.getElementById('clicar')
    sair1.innerText = 'Saiu'
}
 
//Função da soma    
function somar(){
    let texto1 = document.getElementById('txt1')
    let texto2 = document.getElementById('txt2')
    let n1 = Number(texto1.value)
    let n2 = Number(texto2.value)
    res = n1 + n2
    document.getElementById('resultado')
    resultado.innerText = res
}

//Adicionando elementos novos
function add_li(){
    let ul = document.getElementById('novoli')

    const newli = document.createElement('li')
    newli.className = 'list-item'
    newli.innerText = 'Nova lista: '

    const newinput = document.createElement('input')
    newinput.type = 'text'
    //newinput.name = 'iasnput'
    newinput.value = 'Escreva aqui'

    newli.appendChild(newinput)
    ul.appendChild(newli)
}

