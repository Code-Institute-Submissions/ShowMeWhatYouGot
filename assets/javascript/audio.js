
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
};


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

//notes - audio menu
function canDo() {
    audio.inGameAudio.play();
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
};

//In-game Music located on relevant .js page due to one .onload function per page.

//--------------------------------------------------Volume Sliders
var musicVolumeSlider = document.querySelector('#music-volume-slider');
    musicVolumeSlider.addEventListener('input', () => {
    audio.themeMusic.volume = musicVolumeSlider.valueAsNumber / 100;
});

var effectsVolumeSlider = document.querySelector('#effects-volume-slider');
    effectsVolumeSlider.addEventListener('input', () => {
    audio.menuAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.bonusWinAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.shuffleAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.meeseeksAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.inGameAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.rickAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
    audio.swipeAudio.volume = effectsVolumeSlider.valueAsNumber / 100;
});


//--------------------------------------------------On Off Buttons

function musicOnOff() {
    if (audio.isMusicMuted === true) {
        audio.isMusicMuted = false;
        audio.musicBtn.innerHTML = "On";
        audio.themeMusic.play();
    } else if (audio.isMusicMuted === false) {
        audio.isMusicMuted = true;
        audio.musicBtn.innerHTML = "Off";
        audio.themeMusic.pause();
    }    
}

function effectsOnOff() {
    if (audio.isEffectsMuted === true) {
        audio.isEffectsMuted = false;
        audio.effectsBtn.innerHTML = "On";
        audio.menuAudio.muted = false;
        audio.bonusWinAudio.muted = false;
        audio.shuffleAudio.muted = false;
        audio.meeseeksAudio.muted = false;
        audio.inGameAudio.muted = false;
        audio.rickAudio.muted = false;
        audio.swipeAudio.muted = false;
    } else if (audio.isEffectsMuted === false) {
        console.log("button off")
        audio.isEffectsMuted = true;
        audio.effectsBtn.innerHTML = "Off";
        audio.menuAudio.muted = true;
        audio.bonusWinAudio.muted = true;
        audio.shuffleAudio.muted = true;
        audio.meeseeksAudio.muted = true;
        audio.inGameAudio.muted = true;
        audio.rickAudio.muted = true;
        audio.swipeAudio.muted = true
    }
}
