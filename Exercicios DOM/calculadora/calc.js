
const input = document.getElementById('input')
const allowedKeys = ['1','2','3','4','5','6','+','Esc']

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
        //input.value += '0'
        input.value = ''
    }
    let mais = document.getElementById('plus')
    let igual = document.getElementById('equal')

    mais.addEventListener('click', function(){
    const input1 = document.getElementById('input')
    //const numbers = document.querySelectorAll('.charKey')
    //if (numbers === '+'){
    //let res = parseFloat(input.dataset.value)
    //input.dataset.value = res 
    let n1 =+ input1.value
    n1 = parseFloat(n1)
    alert(n1)
    input1.value = n1+'+'

    //if (ev.key === 'Enter'){
    //    calculate() }
}
)

document.querySelectorAll('.charKey').forEach(function (charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value
        input.value += value
    })
}) 

/*let mais = document.getElementById('plus')
let igual = document.getElementById('equal')

igual.addEventListener('click', function(){
    const input1 = document.getElementById('input')
    //const numbers = document.querySelectorAll('.charKey')
    //if (numbers === '+'){
    //let res = parseFloat(input.dataset.value)
    //input.dataset.value = res 
    let n1 =+ input1.value
    n1 = parseFloat(n1)
    alert(n1)
    input1.value = n1+'+'
//}
})
*/

