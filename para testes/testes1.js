function bah () { // botao pra mudar o texto interno
    const butao = document.getElementById('botao1')
    butao.innerText = 'apertado'
    window.alert('botao apertado')
}

function add_form() {
    const addForm = document.getElementById('adic_form')

    const inp = document.createElement('input')
    inp.type = 'text'

    addForm.appendChild(inp)
}

function h1_create () {
    const h1c = document.getElementById('criarh1')

    const h1 = document.createElement('h1')
    h1.innerText = 'Lugar do H1'
    const par = document.createElement('p')
    par.innerText = 'lugar do paragrafo'

    h1c.appendChild(h1)
    h1c.appendChild(par)
}

function addContact () {
    const contactsection = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contacto'

    const nameUl = document.createElement('ul')

    const nameLi = document.createElement('li') 
    nameLi.innerText = 'Nome: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'fullname'

    nameLi.appendChild(newInput)
    nameUl.appendChild(nameLi) 

///////////////////////////////////////////////////

    const h3_2 = document.createElement('h3')
    h3_2.innerText = 'Numero'

    const phoneUl = document.createElement('ul')
    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Numero: '

    const phoneInput = document.createElement('input')
    phoneInput.type = 'number'
    phoneInput.name = 'fullname'

    //phoneUl.append(phoneLi , phoneInput)  coloca tudo ao inves
    // de usar o appendchild e ir um por um
    phoneLi.appendChild(phoneInput)
    phoneUl.appendChild(phoneLi)

    contactsection.append(h3, nameUl, h3_2, phoneUl)
}

function removeContact() {
    const contactsection = document.getElementById('contact-list')

    const allh3 = document.getElementsByTagName('h3')
    const allUl = document.getElementsByTagName('ul')

    contactsection.removeChild(allh3[allh3.length - 1])
    contactsection.removeChild(allUl[allUl.length - 1])

}
