let audio_atual = 1
let cover_atual = 1
let taTocando = 0
const num_audio = 3
const num_cover = 3
const img_cover = document.getElementById('imgID')
const PP = document.getElementById('Play_Pause')
const MA = document.getElementById('music_audio')
const passar = document.getElementById('Next')
let root = document.querySelector(':root')

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
    
    if (cover_atual === num_cover){
        cover_atual = 1
    }
    else {
        cover_atual = cover_atual + 1
    }
    
    img_cover.src = 'Cover '+cover_atual+'.jpg'
    /*document.body.style.backgroundImage = 'var(--cor2)'*/
    /*const cor2 =  root.style.setProperty('--cor2','')
    document.body.style.backgroundImage = --cor2*/
})



