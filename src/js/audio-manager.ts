import { ASSET_URLS } from './urls';
class EndCreditsMusic {
  audio = new BGMusic(ASSET_URLS['../audio/now-youre-a-hero.mp3']);
  startTime: number | null = null;

  play(volume: number) {
    this.startTime = new Date().valueOf();
    this.audio.play(volume);
  }
  set currentTime(value) {
    if (this.audio.bgMusic) {
      this.audio.bgMusic.currentTime = value;
    }
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

class BGMusic {
  src: URL;
  bgMusic: HTMLAudioElement | null = null;
  constructor(src: URL) {
    this.src = src;
  }
  play(volume: number) {
    const bgMusic = new Audio(this.src.href);
    bgMusic.loop = true;
    bgMusic.volume = volume;
    bgMusic.play();
    this.bgMusic = bgMusic;
  }

  pause() {
    this.bgMusic?.pause();
  }
}
class SFX {
  cache: HTMLAudioElement[] = [];
  src: URL;
  constructor(src: URL) {
    this.src = src;
  }
  play(volume: number) {
    let sound;

    const availableSoundInCache = this.cache.find((o) => o.ended);
    if (availableSoundInCache) {
      sound = availableSoundInCache;
    } else {
      sound = new Audio(this.src.href);
      this.cache.push(sound);
    }
    sound.volume = volume;
    sound.play();
  }
}

class AudioManager {
  volume = 1;

  tunnelMusic = new BGMusic(ASSET_URLS['../audio/tunnel.mp3']);
  bossFightMusic = new BGMusic(ASSET_URLS['../audio/boss-fight.mp3']);
  endCreditsMusic = new EndCreditsMusic();

  axeThrowSound = new SFX(ASSET_URLS['../audio/axe-throw.mp3']);
  ropeExplosionSound = new SFX(ASSET_URLS['../audio/rope-explosion.mp3']);
  bossExplosionSound = new SFX(ASSET_URLS['../audio/boss-explosion.mp3']);
  doorSlamSound = new SFX(ASSET_URLS['../audio/door-slam.mp3']);
  laserSound = new SFX(ASSET_URLS['../audio/eye-laser.mp3']);
  deathSound = new SFX(ASSET_URLS['../audio/death.mp3']);
  jumpSound = new SFX(ASSET_URLS['../audio/jump.mp3']);
  landSound = new SFX(ASSET_URLS['../audio/land.mp3']);

  volume0Btn = document.getElementById('volume-0')!;
  volume1Btn = document.getElementById('volume-1')!;
  constructor() {
    this.volume0Btn.addEventListener('click', () => this.setVolume(0));
    this.volume1Btn.addEventListener('click', () => this.setVolume(1));
  }
  playTunnelMusic() {
    this.tunnelMusic.play(this.volume);
  }
  playBossFightMusic() {
    this.bossFightMusic.play(this.volume);
  }
  playEndCreditsMusic() {
    this.endCreditsMusic.play(this.volume);
  }
  pauseTunnelMusic() {
    this.tunnelMusic.pause();
  }
  pauseBossFightMusic() {
    this.bossFightMusic.pause();
  }

  playAxeThrowSound() {
    this.axeThrowSound.play(this.volume);
  }
  playRopeExplosionSound() {
    this.ropeExplosionSound.play(this.volume);
  }
  playBossExplosionSound() {
    this.bossExplosionSound.play(this.volume);
  }
  playDoorslamSound() {
    this.doorSlamSound.play(this.volume);
  }
  playLaserSound() {
    this.laserSound.play(this.volume);
  }
  playDeathSound() {
    this.deathSound.play(this.volume);
  }
  playJumpSound() {
    this.jumpSound.play(this.volume);
  }
  playLandSound() {
    this.landSound.play(this.volume);
  }

  setVolume(volume: number) {
    this.volume = volume;

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
