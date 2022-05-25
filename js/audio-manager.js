class EndCreditsMusic {
    constructor() {
        this.audio = new Audio(new URL('../sounds/now-youre-a-hero.mp3', import.meta.url));
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

class SFX {
    constructor(src) {
        /** @type{HTMLAudioElement[]} */ this.cache = [];
        this.src = src;
    }
    play(volume) {
        let sound;

        const availableSoundInCache = this.cache.find(o => o.ended);
        if (availableSoundInCache) {
            sound = availableSoundInCache;
        } else {
            sound = new Audio(this.src);
            this.cache.push(sound);
        }
        sound.volume = volume;
        sound.play();
    }
}

class AudioManager {
    constructor() {
        this.volume = 1;
        this.tunnelMusic = new Audio(new URL('../sounds/tunnel.mp3', import.meta.url));
        this.tunnelMusic.loop = true;
        this.tunnelMusic.volume = this.volume;
        this.bossFightMusic = new Audio(new URL('../sounds/boss-fight.mp3', import.meta.url));
        this.bossFightMusic.loop = true;
        this.bossFightMusic.volume = this.volume;
        this.axeThrowSound = new SFX(new URL('../sounds/axe-throw.mp3', import.meta.url));
        this.ropeExplosionSound = new SFX(new URL('../sounds/rope-explosion.mp3', import.meta.url));
        this.bossExplosionSound = new SFX(new URL('../sounds/boss-explosion.mp3', import.meta.url));
        this.doorSlamSound = new SFX(new URL('../sounds/door-slam.mp3', import.meta.url));
        this.laserSound = new SFX(new URL('../sounds/eye-laser.mp3', import.meta.url));
        this.deathSound = new SFX(new URL('../sounds/death.mp3', import.meta.url));
        this.jumpSound = new SFX(new URL('../sounds/jump.mp3', import.meta.url));
        this.landSound = new SFX(new URL('../sounds/land.mp3', import.meta.url));
        this.endCreditsMusic = new EndCreditsMusic();

        this.volume0Btn = document.getElementById('volume-0');
        this.volume1Btn = document.getElementById('volume-1');

        this.volume0Btn.addEventListener('click', () => this.setVolume(0));
        this.volume1Btn.addEventListener('click', () => this.setVolume(1));

    }

    playAxeThrowSound() { this.axeThrowSound.play(this.volume); }
    playRopeExplosionSound() { this.ropeExplosionSound.play(this.volume); }
    playBossExplosionSound() { this.bossExplosionSound.play(this.volume); }
    playDoorslamSound() { this.doorSlamSound.play(this.volume); }
    playLaserSound() { this.laserSound.play(this.volume); }
    playDeathSound() { this.deathSound.play(this.volume); }
    playJumpSound() { this.jumpSound.play(this.volume); }
    playLandSound() { this.landSound.play(this.volume); }

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