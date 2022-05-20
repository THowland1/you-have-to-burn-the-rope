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
        this.axeThrowSound = new Audio('./sounds/axe-throw.mp3');
        this.ropeExplosionSound = new Audio('./sounds/rope-explosion.mp3');
        this.bossExplosionSound = new Audio('./sounds/boss-explosion.mp3');
        this.doorSlamSound = new Audio('./sounds/door-slam.mp3');
        this.laserSound = new Audio('./sounds/eye-laser.mp3');
        this.deathSound = new Audio('./sounds/death.mp3');
        this.jumpSound = new Audio('./sounds/jump.mp3');
        this.landSound = new Audio('./sounds/land.mp3');
        this.endCreditsMusic = new EndCreditsMusic();

        this.volume0Btn = document.getElementById('volume-0');
        this.volume1Btn = document.getElementById('volume-1');

        this.volume0Btn.addEventListener('click', () => this.setVolume(0));
        this.volume1Btn.addEventListener('click', () => this.setVolume(1));
    }

    playSound(audio) {
        const sound = audio.cloneNode(true);
        sound.volume = this.volume;
        sound.play();
    }

    playAxeThrowSound() { this.playSound(this.axeThrowSound); }
    playRopeExplosionSound() { this.playSound(this.ropeExplosionSound); }
    playBossExplosionSound() { this.playSound(this.bossExplosionSound); }
    playDoorslamSound() { this.playSound(this.doorSlamSound); }
    playLaserSound() { this.playSound(this.laserSound); }
    playDeathSound() { this.playSound(this.deathSound); }
    playJumpSound() { this.playSound(this.jumpSound); }
    playLandSound() { this.playSound(this.landSound); }

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