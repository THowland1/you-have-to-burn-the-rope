import { Coordinates } from './coordinates';
import { c } from './canvas';
import { Frames } from './frames';
import { timeManager } from './time-manager';
import { audioManager } from './audio-manager';
import { LASER_DURATION, LASER_SPEED } from './consts';
import { player } from './player';
import { explosions } from './explosions';
import { img } from './img';

import { ASSET_URLS } from './urls';

const laserImages = [
  img(ASSET_URLS['../img/laser-1_20x20.png']),
  img(ASSET_URLS['../img/laser-2_20x20.png']),
  img(ASSET_URLS['../img/laser-3_20x20.png']),
  img(ASSET_URLS['../img/laser-4_20x20.png']),
  img(ASSET_URLS['../img/laser-5_20x20.png']),
  img(ASSET_URLS['../img/laser-6_20x20.png']),
  img(ASSET_URLS['../img/laser-7_20x20.png']),
];

interface ILaser {
  top: number;
  left: number;
}
class Lasers {
  lasers: Laser[] = [];

  add({ left, top }: ILaser) {
    this.lasers.push(new Laser({ left, top }));
    audioManager.playLaserSound();
  }
  update() {
    this.lasers = this.lasers.filter(
      (laser) => !laser.finished && !laser.hitPlayer
    );
    this.lasers.forEach((laser) => laser.update());
  }
}
class Laser extends Coordinates {
  laserFrames = new Frames({ fps: 24, images: laserImages });
  startTime = timeManager.now;
  finished = false;
  hitPlayer = false;
  dx: number;
  dy: number;

  constructor({ left, top }: ILaser) {
    super({ x: left, y: top, width: 20, height: 20 });

    const gapX = player.x - this.x;
    const gapY = player.y - this.y;
    const gap = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2));
    this.dx = (LASER_SPEED * gapX) / gap;
    this.dy = (LASER_SPEED * gapY) / gap;
  }

  update() {
    if (this.intersects(player)) {
      player.hurtByLaser();
      this.hitPlayer = true;
    }
    if (timeManager.now - this.startTime > LASER_DURATION) {
      this.finished = true;
      explosions.add({ left: this.left, top: this.top });
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }

  draw() {
    c.drawImage(
      this.laserFrames.get(),
      this.localLeft,
      this.localTop,
      this.width,
      this.height
    );
  }
}
export const lasers = new Lasers();
