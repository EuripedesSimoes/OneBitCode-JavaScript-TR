let list = []
let opcao = ''

//while (opcao !== '3') {
    const div_list = document.getElementById('lista')
    //sistema de fila da compra que aparece no prompt
    let compras = ''
    for (i=0; i<list.length; i++) {
        compras += (i+1) + 'º - ' + compras +'\n' 
    }

    //sistema que escolhe a opção a ser feita no prompt
    //opcao = prompt('Compras: '+ compras + '\n' +
    //'Opção 1: Add nova compra'+'\n'+'Opção 2: Consultar compra'
    //+'\n'+'Opção 3: Sair')

    let sn = prompt('Deseja adicionar mais uma compra?'+'\n'+'Digite S ou N')
    let sns = prompt('Deseja continuar?')
    if (sns == 's'){
        const nova_compra = prompt('Digite a nova compra')
        list.push(nova_compra)
        console.log(list)
        div_list.innerText = list
    }
    
    //switch(opcao){
    //    case '1':
    //        const nova_compra = prompt('Digite a nova compra')
    //        list.push(nova_compra)
    //        console.log(list)
    //        div_list.innerText = list
    //        break
    //    case '2':
    //        list[0] = 'pos 0'
    //        console.log(list)
    //        alert(list)
    //        break
    //    case '3':
    //        break
    //}
//}
