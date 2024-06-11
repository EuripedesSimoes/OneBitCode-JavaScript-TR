let lista = []
let opcao = ""

do{ //sistema de fila da compra que aparece no prompt
    let compras = ""
    for (i=0; i<lista.length; i++) {
        compras += '\n' + (i+1) + 'ª - ' + lista[i] +'\n'
    }

    //sistema que escolhe a opção a ser feita no prompt
    opcao = prompt('Compras: '+compras + '\n' +
    'Opção 1: Add nova compra'+'\n'+'Opção 2: Consultar compra'
    +'\n'+'Opção 3: Sair')

    //sistema que fará o que for dito no prompt
    switch(opcao){
        case '1':
            const nova_compra = prompt('Digite a nova compra')
            lista.push(nova_compra)
            break
        case '2':
            const fila = alert(lista)
            break
        case '3':
            const fim = alert('Programa encerrado')
            break
    }
}

while (opcao !== '3')