import { Coordinates } from './coordinates';
import { c } from './canvas.js';
import { CHANDELIER_GRAVITY } from './consts';
import { timeManager } from './time-manager';
import { phaseManager } from './phase-manager.js';
import { boss } from './boss.js';
import { img } from './img';

import { ASSET_URLS } from './urls';
class Chandelier extends Coordinates {
    constructor() {
        super({ x: 130 * 32, y: 12 * 32, width: 5 * 32, height: 3 * 32 });
        this.img = img(ASSET_URLS['../img/chandelier_160x96.png']);
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