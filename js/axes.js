import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';
import { boss } from './boss.js';
import { healthBar } from './healthbar.js';
import { timeManager } from './time-manager.js';
import { AXE_SPEED, AXE_GRAVITY } from './consts.js';

function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}

class Axes {
    constructor() {
         /** @type {Axe[]} */ this.axes = [];
    }
    add({ left, top, shootRight }) {
        this.axes.push(new Axe({ left, top, shootRight }));
    }
    update() {
        this.axes = this.axes.filter(axe => timeManager.now - axe.startTime < 6000 && !axe.hitBoss);
        this.axes.forEach(axe => axe.update());
    }
}
class Axe extends Coordinates {
    constructor({ left, top, shootRight }) {
        super({ x: left, y: top, width: 18, height: 18 });
        this.img = img('./sprites/axe_18x18.png');
        this.startTime = new Date().valueOf();
        this.angle = 0;
        this.finished = false;
        this.velocity = -7.5;
        this.turnsPerSecond = .25;
        this.shootRight = shootRight;
        this.hitBoss = false;
    }

    update() {
        if (this.intersects(boss)) {
            this.hitBoss = true;
            healthBar.health -= .01;
        }
        this.x += this.shootRight ? AXE_SPEED : -AXE_SPEED;
        this.velocity += AXE_GRAVITY;
        this.y += this.velocity;
        this.angle += 2 * Math.PI * this.turnsPerSecond * (timeManager.now - this.startTime) / 1000;
        this.draw();
    }

    draw() {
        c.save();
        c.setTransform(1, 0, 0, 1, this.localLeft, this.localTop); // sets scale and origin
        c.rotate(this.angle);
        c.drawImage(this.img, -9, -9, this.width, this.height);
        c.restore();
    }

}
export const axes = new Axes();