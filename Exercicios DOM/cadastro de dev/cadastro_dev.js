function addTech () {
    const ulptech = document.getElementById('ulTech')
    const li = document.createElement('li')
    const labelLi = document.createElement('label')

    const liR1 = document.createElement('li')
    const labelLiR1 = document.createElement('label')

    const liR2 = document.createElement('li')
    const labelLiR2 = document.createElement('label')

    const liR3 = document.createElement('li')
    const labelLiR3 = document.createElement('label')
    
    const btnTech = document.createElement('div')

    li.innerHTML = "<input type='text' name='liTech' id='liTech1'>"
    labelLi.innerHTML = "<label for='liTech1'>Nome da tecnologia</label>"

    liR1.innerHTML = "<input type='radio' id='2_radio'>"
    labelLiR1.innerHTML = "<label for='2_radio'>0-1 xp</label>"

    liR2.innerHTML = "<input type='radio' id='3_radio'>"
    labelLiR2.innerHTML = "<label for='3_radio'>2-4 xp</label>"

    liR3.innerHTML = "<input type='radio' id='4_radio'>"
    labelLiR3.innerHTML = "<label for='4_radio'>+5 xp</label> <br>"

    btnTech.innerHTML = "<button type='submit'>Adicionar essa tecnologia</button><br><hr>"
    

    labelLi.appendChild(li)
    liR1.appendChild(labelLiR1)
    liR2.appendChild(labelLiR2)
    liR3.appendChild(labelLiR3)
    ulptech.append(labelLi, liR1, liR2, liR3, btnTech) 
}