import { Coordinates } from './coordinates.js';
import { timeManager } from './time-manager.js';
import { c } from './canvas.js';
import { img } from './img.js';

import { ASSET_URLS } from './urls.js';

export class Flame extends Coordinates {
    constructor({ left, top }) {
        super({ x: left, y: top, width: 1 * 32, height: 2 * 32 });
        this.img = img(ASSET_URLS['../sprites/flame-sprites.png']);
        this.framesPerSecond = 10;
        this.frameCount = 3;
        this.frameIndex = 0;
        this.frameUpdated = new Date().valueOf();
    }

    draw() {
        if (timeManager.now - this.frameUpdated > 1000 / this.framesPerSecond) {
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;
            this.frameUpdated = timeManager.now;
        }
        const sx = this.frameIndex * 32;
        const sy = 0;
        const sw = this.width;
        const sh = this.height;
        const dx = this.localLeft;
        const dy = this.localTop;
        const dw = this.width;
        const dh = this.height;
        this.img && c.drawImage(this.img,
            sx,
            sy,
            sw,
            sh,
            dx,
            dy,
            dw,
            dh,
        );
    }
}

export const flames = [
    new Flame({ left: 109 * 32, top: 18 * 32 }),
    new Flame({ left: 111 * 32, top: 13 * 32 }),
    new Flame({ left: 109 * 32, top: 8 * 32 }),
    new Flame({ left: 155 * 32, top: 18 * 32 }),
    new Flame({ left: 153 * 32, top: 13 * 32 }),
    new Flame({ left: 155 * 32, top: 8 * 32 }),
];