
function Dark_theme() {
    document.body.style.backgroundColor = '#000000'
    document.body.style.color = '#ffffff'
    const tema_escuro = document.getElementById('theme')
    tema_escuro.innerText = 'Tema de preto (quem ta vendo o video)'
}

function Light_theme() {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'
    const tema_claro = document.getElementById('theme')
    tema_claro.innerText = 'Tema claro'
}

function Verde_gross() {
    document.body.style.backgroundColor = '#246024'
    document.body.style.color = '#000000'
    const tema_verde = document.getElementById('theme')
    tema_verde.innerText = 'Tema Verde Musgo (o melhor)'
}

document.getElementById('cor_escura').addEventListener('click', Dark_theme)
document.getElementById('cor_clara').addEventListener('click', Light_theme)
document.getElementById('verdola').addEventListener('click', Verde_gross)