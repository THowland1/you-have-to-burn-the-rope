import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';
import { CHANDELIER_GRAVITY } from './consts.js';
import { timeManager } from './time-manager.js';
import { phaseManager } from './phase-manager.js';
import { boss } from './boss.js';
import { img } from './img.js';

import { ASSET_URLS } from './urls.js';
class Chandelier extends Coordinates {
    constructor() {
        super({ x: 130 * 32, y: 12 * 32, width: 5 * 32, height: 3 * 32 });
        this.img = img(ASSET_URLS['../sprites/chandelier_160x96.png']);
        this.show = true;
        this.dropped = false;
        this.velocity = {
            y: 0
        };
    }
    draw() {
        this.img && c.drawImage(this.img, this.localLeft, this.localTop, this.width, this.height);
    }
    update() {
        if (!this.show) {
            return;
        }
        if (this.dropped) {
            this.velocity.y += CHANDELIER_GRAVITY * timeManager.msPerFrame;
            this.y += this.velocity.y * timeManager.msPerFrame;

            if (this.yCenter > boss.yCenter) {
                phaseManager.startBossDyingPhase();
            }
        }
        this.draw();
    }
}

export const chandelier = new Chandelier();