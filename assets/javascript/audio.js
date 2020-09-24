
//--------------------------------------------------Variables

let audio = {
    menuAudio: new Audio('assets/audio/sound-effects/portal-gun.mp3'),
    inGameAudio: new Audio('assets/audio/sound-effects/can-do.mp3'),
    rickAudio: new Audio('assets/audio/sound-effects/wubalubadubdub.mp3'),
    bonusWinAudio: new Audio('assets/audio/sound-effects/no-god.mp3'),
    shuffleAudio: new Audio('assets/audio/sound-effects/show-me.mp3'),
    meeseeksAudio: new Audio('assets/audio/sound-effects/meeseeks.mp3'),
    swipeAudio: new Audio('assets/audio/sound-effects/swipe.mp3'),
    themeMusic: document.getElementById('theme-music'),
    gameMusic: document.getElementById('game-music'),
    musicBtn: document.getElementById('music-btn'),
    effectsBtn: document.getElementById('effects-btn'),
    isMusicMuted: false,
    isEffectsMuted: false,
}


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
    audio.gameMusic.pause();
}

//notes - audio menu
function canDo() {
    audio.inGameAudio.play();
    audio.gameMusic.pause();
}

//Move Game - swipe
function swipe() {
    audio.swipeAudio.play();
}


//--------------------------------------------------Music Functions
window.onload = function() {
    document.getElementById("theme-music").play();
    audio.themeMusic.loop = true;
    audio.themeMusic.volume = 0.4;  
}

//In-game Music located on relevant .js page due to one .onload function per page.

function gMusic() {
    audio.gameMusic.play();
}


//--------------------------------------------------Volume Sliders
let musicVolumeSlider = document.querySelector('#music-volume-slider');
musicVolumeSlider.addEventListener('input', () => {
    audio.themeMusic.volume = musicVolumeSlider.valueAsNumber / 100;
});


//--------------------------------------------------On Off Buttons

function musicOnOff() {
    if (audio.isMusicMuted === true) {
        audio.isMusicMuted = false;
        audio.musicBtn.innerHTML = "On";
        audio.themeMusic.play();
        audio.gameMusic.play();
    } else if (audio.isMusicMuted === false)
        audio.isMusicMuted = true;
        audio.musicBtn.innerHTML = "Off";
        audio.themeMusic.pause();
        audio.gameMusic.pause();
    }    

function effectsOnOff() {
    if (audio.isEffectsMuted === true) {
        audio.isEffectsMuted = false;
        audio.effectsBtn.innerHTML = "On";
        audio.menuAudio.play();
    } else if (audio.isEffectsMuted === false)
        audio.isEffectsMuted = true;
        audio.effectsBtn.innerHTML = "Off";
        audio.menuAudio.muted();
        console.log(effectsOnOff());
}

