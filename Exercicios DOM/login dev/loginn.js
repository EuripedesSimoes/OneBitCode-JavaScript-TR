//const nome = document.getElementById('name').value = 'Carlos'
//const pw = document.getElementById('senha').value = '123'


function validar() {
    const nome = document.getElementById('name').value
    const pw = document.getElementById('senha').value
    
    //alert(nome)
    //alert(pw) 
    if (nome !== 'carlos' || pw !== '123') {
        alert('Nome ou senha inválidos, digite novamente')
    }
    else(
        alert('Tá no jeito')
    )
   
}

