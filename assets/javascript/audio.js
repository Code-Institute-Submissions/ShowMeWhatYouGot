
//--------------------------------------------------Variables

let audio = {
    menuAudio: new Audio('../../assets/audio/sound-effects/portal-gun.mp3'),
    rickAudio: new Audio('../../assets/audio/sound-effects/wubalubadubdub.mp3'),
    shuffleAudio: new Audio('../../assets/audio/sound-effects/show-me.mp3'),
    meeseeksAudio: new Audio('../../assets/audio/sound-effects/meeseeks.mp3'),
    swipeAudio: new Audio('../../assets/audio/sound-effects/swipe.mp3'),
}

//--------------------------------------------------Sound Effects

//Menu - Portal Gun
function menu() {
    audio.menuAudio.play();
}

//Rick Game Select - Wubalubadubdub
function wub() {
   audio.rickAudio.play();
}

//Shuffle Game - Show Me What You Got
function showMe() {
    audio.shuffleAudio.play();
}

//meeseeks box - how to play
function howToPlay() {
    audio.meeseeksAudio.play();
}

//Move Game - swipe
function swipe() {
    audio.swipeAudio.play();
}