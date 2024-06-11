function show_result(){
    const n1 = document.getElementById('btn1')
    const inputResult = document.getElementById('showResult')
    inputResult.innerText = 'n1'
}


function show_n1(){
    const n1 = document.getElementById('btn1')
    const inputResult = document.getElementById('divRes')
    inputResult.innerText = n1
}
document.getElementById('calcular').addEventListener('click', show_n1)

document.getElementById('showResult').addEventListener('click', show_result)
