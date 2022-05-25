import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';
import { Frames } from './frames.js';
import { timeManager } from './time-manager.js';
import { audioManager } from './audio-manager.js';
import { LASER_DURATION, LASER_SPEED } from './consts.js';
import { player } from './player.js';
import { explosions } from './explosions.js';
import { img } from './img.js';

import { ASSET_URLS } from './urls.js';

const laserImages = [
    img(ASSET_URLS['../img/laser-1_20x20.png']),
    img(ASSET_URLS['../img/laser-2_20x20.png']),
    img(ASSET_URLS['../img/laser-3_20x20.png']),
    img(ASSET_URLS['../img/laser-4_20x20.png']),
    img(ASSET_URLS['../img/laser-5_20x20.png']),
    img(ASSET_URLS['../img/laser-6_20x20.png']),
    img(ASSET_URLS['../img/laser-7_20x20.png']),
];

class Lasers {
    constructor() {
         /** @type {Laser[]} */ this.lasers = [];
    }
    add({ left, top }) {
        this.lasers.push(new Laser({ left, top }));
        audioManager.playLaserSound();
    }
    update() {
        this.lasers = this.lasers.filter(laser => !laser.finished && !laser.hitPlayer);
        this.lasers.forEach(laser => laser.update());
    }
}
class Laser extends Coordinates {
    constructor({ left, top }) {
        super({ x: left, y: top, width: 20, height: 20 });
        this.laserFrames = new Frames({ fps: 24, images: laserImages });
        this.startTime = timeManager.now;
        this.finished = false;
        this.hitPlayer = false;

        const gapX = player.x - this.x;
        const gapY = player.y - this.y;
        const gap = Math.sqrt(Math.pow(gapX, 2) + Math.pow(gapY, 2));
        this.dx = LASER_SPEED * gapX / gap;
        this.dy = LASER_SPEED * gapY / gap;
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
        c.drawImage(this.laserFrames.get(), this.localLeft, this.localTop, this.width, this.height);
    }

}
export const lasers = new Lasers();
