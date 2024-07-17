//console.log('Hello World')
let base = 1328
let pmes = 500
let porc = 0.7/100 // ou 7/1000
// de julho de 2024 até metade (maio/verão) de 2031 no canada =~ 7 anos => 84 meses
// i = mes
for (i=1; i<85; i++){
    base = (base + pmes)+((base + pmes) * porc)
    console.log(base)
    console.log(`O total lucrado até 2029 foi ${base - 1328 - (pmes*(i))}`)
    console.log('==============================================================')
}
/*console.log(`O dinheiro mensal total aportado foi ${pmes*4}`)*/
console.log('**************************************************************')
console.log(`O dinheiro total aportado até 2029 foi ${1328+(pmes*85)}`)
console.log(`O total lucrado até 2029 foi ${base - 1328 - (pmes*85)}, com total de ${base}`)
console.log('**************************************************************')
/*console.log(`O dinheiro total aportado até 2031 foi ${1328+(pmes*84)}`)*/


/*
let mes = 1
while ( mes < 5) {
    mes = mes + 1
    base = base + pmes 
    console.log(base)
}*/