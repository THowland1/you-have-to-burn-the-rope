import { c, FRAME_WIDTH } from './canvas.js';

class HealthBar {
    constructor() {
        this.health = 1;
        this.deathTime = null;
        this.show = false;
    }
    die() {
        this.deathTime = new Date().valueOf();
    }
    update() {
        if (!this.show) {
            return;
        }
        if (this.deathTime) {
            this.health = 1 * Math.exp(- (new Date().valueOf() - this.deathTime) / 200);
        }
        this.health = (1 - 0.99 * (1 - this.health));
        this.draw();
    }
    draw() {
        c.fillStyle = 'white';
        c.fillRect(16, 16, FRAME_WIDTH - 32, 20);
        c.fillRect(16, 32, 154, 24);
        c.fillStyle = 'black';
        c.fillRect(18, 18, FRAME_WIDTH - 36, 16);
        c.fillRect(18, 30, 150, 24);
        c.fillStyle = 'red';
        c.fillRect(20, 20, (FRAME_WIDTH - 40) * this.health, 12);
        c.fillStyle = 'white';
        c.textAlign = 'left';
        c.font = 'bold 14px Inter';
        c.fillText('Grinning Colossus', 28, 48);
    }
}


export const healthBar = new HealthBar();