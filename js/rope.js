import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';

class FlammableBitOfRope extends Coordinates {
    constructor() {
        super({ x: (132 * 32) + 12, y: 6 * 32, width: 8, height: 4.25 * 32 });
    }
}

class Rope extends Coordinates {
    constructor() {
        super({ x: (132 * 32) + 12, y: 6 * 32, width: 8, height: 6 * 32 });
        this.img = new Image();
        this.img.src = './sprites/rope_8x192.png';
        this.show = true;
        this.flammableBitOfRope = new FlammableBitOfRope();
    }
    update() {
        if (!this.show) {
            return;
        }
        this.draw();
    }
    draw() {
        const dx = this.localLeft;
        const dy = this.localTop;
        const dw = this.width;
        const dh = this.height;
        this.img && c.drawImage(this.img,
            dx,
            dy,
            dw,
            dh,
        );
    }
}

export const rope = new Rope();