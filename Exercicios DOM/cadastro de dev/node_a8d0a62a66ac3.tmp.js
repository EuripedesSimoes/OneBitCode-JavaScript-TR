function addTech () {
    const ulTech = document.getElementById('newTech')
    const liTech = document.createElement('li')
    //  dentro do li deve ter um input text
    const input_tech = document.createElement('input')

    liTech.appendChild(input_tech)
    ulTech.appendChild(liTech)
}