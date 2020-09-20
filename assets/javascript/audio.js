
//--------------------------------------------------Variables

let audio = {
    menuAudio: new Audio('../../../assets/audio/sound-effects/portal-gun.mp3'),
    rickAudio: new Audio('../../../assets/audio/sound-effects/wubalubadubdub.mp3'),
    bonusWinAudio: new Audio('../../../assets/audio/sound-effects/no-god.mp3'),
    shuffleAudio: new Audio('../../../assets/audio/sound-effects/show-me.mp3'),
    meeseeksAudio: new Audio('../../../assets/audio/sound-effects/meeseeks.mp3'),
    swipeAudio: new Audio('../../../assets/audio/sound-effects/swipe.mp3'),
    gameMusic: document.getElementById('game-music'),
}

//--------------------------------------------------Default Volume Settings

/*function defaultVolume() {
    audio.gameMusic.volume = audio.musicVolumeSlider.defaultValue / 100;
    audio.rickAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    audio.bonusWinAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    audio.shuffleAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    audio.meeseeksAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    audio.swipeAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
}*/


//--------------------------------------------------Sound Effects Functions

//Menu - Portal Gun
function menu() {
    audio.menuAudio.play();
}

//Modal Win - Bonus Win
function noGod() {
    audio.bonusWinAudio.play();
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

//--------------------------------------------------Music Functions
window.onload = function() {
    document.getElementById("game-music").play();
    audio.gameMusic.loop = true;
}


