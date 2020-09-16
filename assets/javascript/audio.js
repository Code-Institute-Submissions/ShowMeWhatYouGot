
//--------------------------------------------------Variables

let audio = {
    menuAudio: new Audio('../../assets/audio/sound-effects/portal-gun.mp3'),
    rickAudio: new Audio('../../assets/audio/sound-effects/wubalubadubdub.mp3'),
    shuffleAudio: new Audio('../../assets/audio/sound-effects/show-me.mp3'),
    meeseeksAudio: new Audio('../../assets/audio/sound-effects/meeseeks.mp3'),
    swipeAudio: new Audio('../../assets/audio/sound-effects/swipe.mp3'),
    musicAudio: new Audio('../../assets/audio/music/game-music.mp3')
    /*isEffectsMuted: false,
    isMusicMuted: false,
    musicBtn: document.getElementById('music-btn'),
    effectsBtn: document.getElementById('effects-btn'),
    musicVolumeSlider: document.getElementById('music-volume-slider'),
    effectsVolumeSlider: document.getElementById('effects-volume-slider'),*/
}

//--------------------------------------------------Default Volume Settings

/*function defaultVolume() {
    audio.musicAudio.volume = audio.musicVolumeSlider.defaultValue / 100;
    audio.menuAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    audio.rickAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    audio.shuffleAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    meeseeksAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    swipeAudio.volume = audio.effectsVolumeSlider.defaultValue / 100;
    console.log(defaultVolume());
}*/

//--------------------------------------------------Sound Effects Functions

//Menu - Portal Gun
function menu() {
    audio.menuAudio.play();
}

//Modal Win - Wubalubadubdub


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