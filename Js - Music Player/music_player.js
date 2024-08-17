import { music_name, music_origin, msc_name, msc_org } from "./funcoes.js"

let audio_atual = 1
let cover_atual = 1
let taTocando = 0
const num_audio = 3
const num_cover = 3
const img_cover = document.getElementById('imgID')
const PP = document.getElementById('PlayPause')
const MA = document.getElementById('musicAudio')
const passar = document.getElementById('Next')
const voltar = document.getElementById('Back')
let root = document.querySelector(':root')

const barra = document.querySelector('.barra')
const progressBar = document.getElementById("myProgress");
const teste = document.getElementById('teste')
const ponto = document.querySelector('.ponto')




// play ou pause
function play(){
    MA.play()
    taTocando = 1
    PP.src = 'imgs-msc_player/pause-button.png'
    /*PP.innerText = 'Pausar'*/
}
function pause(){
    MA.pause()
    taTocando = 0
    PP.src = 'imgs-msc_player/play-button.png'
    /*PP.innerText = 'Play'*/
}

function PlayOrPause(){
    if (taTocando === 0){
        play()
    }
    else {
        pause()
    }
}
PP.addEventListener('click', PlayOrPause)


//função de passar o audio
passar.addEventListener('click', () => {
    if (audio_atual === num_audio){
        audio_atual = 1
    }
    else {
        audio_atual = audio_atual + 1
    }
    MA.src = "Audio " + audio_atual + ".mp3"
    MA.play()
    taTocando = 1

    if (cover_atual === num_cover){
        cover_atual = 1
    }
    else {
        cover_atual = cover_atual + 1
    }
    document.body.style.backgroundImage = 'var(--bg'+cover_atual+')'
    img_cover.src = 'imgs-msc_player/Small_Cover '+cover_atual+'.jpg'
    music_name.innerText = msc_name[cover_atual]
    PP.src = 'imgs-msc_player/pause-button.png'
})
//função de voltar o audio
function voltarFaixa (){
    if (audio_atual === 1){
        audio_atual = num_audio 
    }else {
        audio_atual = audio_atual - 1
    }
    MA.src = "Audio " + audio_atual + ".mp3"
    MA.play()
    taTocando = 1

    if (cover_atual === 1){
        cover_atual = num_cover
    }
    else {
        cover_atual = cover_atual - 1
    }
    document.body.style.backgroundImage = 'var(--bg'+cover_atual+')'
    img_cover.src = 'imgs-msc_player/Small_Cover '+cover_atual+'.jpg'
    music_name.innerText = msc_name[cover_atual]
    PP.src = 'imgs-msc_player/pause-button.png'
}
voltar.addEventListener('click',voltarFaixa)




//função de atualizar o ponto junto com o valor do progresso
MA.addEventListener('timeupdate', attBar)
//sem esse nao funfa
function attBar(){
    let pg = document.querySelector('progress')
    pg.value = Math.floor((MA.currentTime/MA.duration)*100)
    /*ponto.style.right = prog.value+'px'*/
    if (pg.value <= 10) {
    ponto.style.marginLeft = (pg.value*1.8) +'px'
}else if(pg.value < 20){
    ponto.style.marginLeft = (pg.value*1.8) +'px'
}else if(pg.value <= 30){
    ponto.style.marginLeft = (pg.value*2.2) +'px'
}else if(pg.value <= 40){
    ponto.style.marginLeft = (pg.value*2.3) +'px'
}
else if (pg.value >50){
    ponto.style.marginLeft = (pg.value*2.5) +'px'
}
    //Atualização de minutagem
    let campoMinutos = Math.floor(MA.currentTime/60)
    let campoSegundos = Math.floor(MA.currentTime%60)
    if (campoSegundos < 10){
        campoSegundos = '0'+campoSegundos
    }
    let inicio_audio = document.querySelector('.inicio_audio')
    inicio_audio.innerText = campoMinutos +':'+ campoSegundos
    
    let campoMin = Math.floor(MA.duration/60)
    let campoSeg = Math.floor(MA.duration%60)
    if (campoSeg < 10){
        campoSeg = '0'+campoSeg
    }
    let fim_audio = document.querySelector('.fim_audio')
    fim_audio.innerText = campoMin +':'+ campoSeg
}


//barras para clicar e pular minutagem
progressBar.addEventListener('click', (ev)=>{
    let newTime = (ev.offsetX / progressBar.offsetWidth) * MA.duration
    MA.currentTime = newTime
})
//esse parece não fazer nada
/*progressBar.addEventListener("input", () => {
    const value = progressBar.value;
    const containerWidth = progressBar.offsetWidth;
    const pontoPosition = (value * 3) * containerWidth;
});*/





/*
barra.addEventListener('click', (ev)=>{
const mouseX = ev.clientX - barra.offsetWidth+312;
ponto.style.left = `${mouseX}px`;
})*/

// mudar o value ao clicar
/*barra.addEventListener('click', (ev) => {
    let newTime = (ev.offsetX / barra.offsetWidth)
    progressBar.value = Math.floor(newTime * 100)
    progressBar.style.width = Math.floor(newTime * 100)+'%'
    MA.currentTime = Math.floor(newTime * 100)
})*/



//barra de teste
/* 
teste.addEventListener('click', (ev) => {
    let newTime = (ev.offsetX / teste.offsetWidth)
    /*alert(newTime)
    teste.value = newTime * 100
    alert('cu')
})*/


/*
progressBar.addEventListener('click', (ev) => {
    let newTime = (ev.offsetX / progressBar.offsetWidth)
    progressBar.duration
    progressBar.currentTime = newTime
})
)*/
