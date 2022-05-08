import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';
import { CHANDELIER_GRAVITY } from './consts.js';

class Chandelier extends Coordinates {
    constructor() {
        super({ x: 130 * 32, y: 12 * 32, width: 5 * 32, height: 3 * 32 });
        this.img = new Image();
        this.img.src = './sprites/chandelier_160x96.png';
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
            this.velocity.y += CHANDELIER_GRAVITY;
            this.y += this.velocity.y;
        }
        this.draw();
    }
}

export const chandelier = new Chandelier();