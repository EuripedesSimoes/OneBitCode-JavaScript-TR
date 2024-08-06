let audio_atual = 1
let cover_atual = 1
let taTocando = 0
const num_audio = 3
const num_cover = 3
const img_cover = document.getElementById('imgID')
const PP = document.getElementById('PlayPause')
const MA = document.getElementById('musicAudio')
const passar = document.getElementById('Next')
let root = document.querySelector(':root')

const barra = document.querySelector('.barra')
const progressBar = document.getElementById("myProgress");
const teste = document.getElementById('teste')
const ponto = document.querySelector('.ponto')



function play(){
    MA.play()
    taTocando = 1
    PP.innerText = 'Pausar'
}
function pause(){
    MA.pause()
    taTocando = 0
    PP.innerText = 'Play'
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
    PP.innerText = 'Pausar'
    ponto.style.left = "228px"
    /*ponto.style.right = '0px'*/
    
    if (cover_atual === num_cover){
        cover_atual = 1
    }
    else {
        cover_atual = cover_atual + 1
    }
    document.body.style.backgroundImage = 'var(--bg'+cover_atual+')'
})



MA.addEventListener('timeupdate', attBar)
//sem esse nao funfa
function attBar(){
    let pg = document.querySelector('progress')
    pg.value = Math.floor((MA.currentTime/MA.duration)*100)
    /*ponto.style.right = prog.value+'px'*/
    ponto.style.marginLeft = (pg.value*3) +'px'

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


    /*for (i=1;i<99;i++){
        ponto.style.right = ponto.style.right+i+'px';
    }*/
}

//barras para clicar e pular minutagem

progressBar.addEventListener('click', (ev)=>{
    let newTime = (ev.offsetX / progressBar.offsetWidth) * MA.duration
    MA.currentTime = newTime
})

progressBar.addEventListener("input", () => {
    const value = progressBar.value;
    const containerWidth = progressBar.offsetWidth;
    const pontoPosition = (value * 3) * containerWidth;

    
});





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
