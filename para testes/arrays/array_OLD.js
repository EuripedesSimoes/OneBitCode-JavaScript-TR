document.getElementById('btn_list').addEventListener('click', function (){
   
   
    //let lista_compra = []
    //lista_compra[0] = 'a'
    //lista_compra[1] = 'c'
    //lista_compra.push('calc')
    //console.log(lista_compra)
    //console.log(lista_compra.length)

    //const lista_input = document.getElementById('lista').value
    //let listarr = []
    //const div_list = document.getElementById('div_list')
    //const h1_div = document.createElement('h1')
//
    //listarr.push(lista_input)
    //h1_div.appendChild(listarr)
    //div_list.appendChild(h1_div)
    
    const lista_input = document.getElementById('lista').value
    const liarr = document.createElement('li')
    const ul_lista = document.getElementById('ul_list')

    //colocar o li dentro do array
    const arr = []
    arr.push(lista_input)


    //Deu certo
    //const arr = []
    //arr.push(lista_input)
    //console.log(arr)
    //alert(arr)

    //liarr.innerText = lista_input
    //ul_lista.appendChild(liarr)
    //liarr.appendChild(arr)
    //ul_lista.appendChild(liarr)
})