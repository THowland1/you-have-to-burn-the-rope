import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';
import { Frames } from './frames.js';
import { img } from './img.js';

const explosionImages = [
    img(new URL('../sprites/explosion-1_36x36.png', import.meta.url)),
    img(new URL('../sprites/explosion-2_36x36.png', import.meta.url)),
    img(new URL('../sprites/explosion-3_36x36.png', import.meta.url)),
    img(new URL('../sprites/explosion-4_36x36.png', import.meta.url)),
    img(new URL('../sprites/explosion-5_36x36.png', import.meta.url)),
    img(new URL('../sprites/explosion-6_36x36.png', import.meta.url)),
    img(new URL('../sprites/explosion-7_36x36.png', import.meta.url)),
];
class Explosions {
    constructor() {
         /** @type {Explosion[]} */ this.explosions = [];
    }
    add({ left, top }) {
        this.explosions.push(new Explosion({ left, top }));
    }
    update() {
        this.explosions = this.explosions.filter(explosion => explosion.frames.currentIndex < 6);
        this.draw();
    }
    draw() {
        this.explosions.forEach(explosion => explosion.draw());
    }
}
class Explosion extends Coordinates {
    constructor({ left, top }) {
        super({ x: left, y: top, width: 36, height: 36 });
        this.frames = new Frames({ images: explosionImages, fps: 14 });
    }

    draw() {
        c.drawImage(this.frames.get(), this.localLeft, this.localTop, this.width, this.height);
    }

}

export const explosions = new Explosions();
