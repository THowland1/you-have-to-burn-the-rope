class EndCreditsMusic {
    constructor() {
        this.audio = new Audio('./sounds/now-youre-a-hero.mp3');
        this.startTime = null;
    }
    play() {
        this.startTime = new Date().valueOf();
        this.audio.play();
    }
    set currentTime(value) {
        this.audio.currentTime = value;
        const date = new Date();
        date.setSeconds(date.getSeconds() - value);
        this.startTime = date.valueOf();
    }
    get currentTime() {
        if (this.startTime) {
            return (new Date().valueOf() - this.startTime) / 1000;
        } else {
            return 0;
        }
    }
}

class AudioManager {
    constructor() {
        this.volume = 1;
        this.tunnelMusic = new Audio('./sounds/tunnel.mp3');
        this.tunnelMusic.loop = true;
        this.tunnelMusic.volume = this.volume;
        this.bossFightMusic = new Audio('./sounds/boss-fight.mp3');
        this.bossFightMusic.loop = true;
        this.bossFightMusic.volume = this.volume;
        this.endCreditsMusic = new EndCreditsMusic();

        this.volume0Btn = document.getElementById('volume-0');
        this.volume1Btn = document.getElementById('volume-1');

        this.volume0Btn.addEventListener('click', () => this.setVolume(0));
        this.volume1Btn.addEventListener('click', () => this.setVolume(1));
    }

    setVolume(volume) {
        this.volume = volume;

        this.tunnelMusic.volume = volume;
        this.bossFightMusic.volume = volume;
        this.endCreditsMusic.audio.volume = volume;

        if (this.volume > 0) {
            this.volume0Btn.classList.remove('hidden');
            this.volume1Btn.classList.add('hidden');
        } else {
            this.volume0Btn.classList.add('hidden');
            this.volume1Btn.classList.remove('hidden');
        }
    }
}

export const audioManager = new AudioManager();