
const input = document.getElementById('input')
const resultInput = document.getElementById("result")
const allowedKeys = ['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','(',')']
/*resultInput.value = "0"
input.value = '0'*/


// Adicionar valor no input - 1: referenciar o próprio evento
// 2: prevenir de repetir; 3: se as teclas apertadas do evento 
// forem iguais ou estiverem na lista do allowedkeys, entao
// 4: valor do input recebe a tecla apertada do evento keydown
input.addEventListener('keydown', function(ev){
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
}  
    // apagar conteudo, o novo valor do 
    // input será o antigo valor mas cortado(slice)
    if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1)
    }
    if (ev.key === 'Enter'){
        calculateEnter()
    }
    function calculateEnter(){
        if (input.value === ''){
            input.value = 'ERROR'
        }
        else {
        input.focus()
        const resultEnter = eval(input.value)
        resultInput.value = resultEnter 
        input.value = resultInput.value
    }
    }
    
    /*let mais = document.getElementById('plus')
    let igual = document.getElementById('equal')*/

})

/*1ºSelecionar todos que tem a classe 'charKey; 2º'Para cada um deles
vai ser adicionado um função por clique que retorna o data-value do botão
e vai parar direto no valor(value) do input*/
document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
        input.focus()
    })
}) 

document.getElementById('clear').addEventListener('click', function(){
    input.value = ''
    input.focus()
})

document.getElementById('apagar').addEventListener('click', function(){
    input.value = input.value.slice(0,-1)
    input.focus()
})
//dar uma olhada aqui no calculate() retornando
document.getElementById('equal').addEventListener('click', function calculate(){
    if (input.value === ''){
        input.value = 'ERROR'
    }
    else {
    input.focus()
    const resultEnter = eval(input.value)
    resultInput.value = resultEnter 
    input.value = resultInput.value
}
})
