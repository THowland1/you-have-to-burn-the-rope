import { Coordinates } from './coordinates.js';
import { Frames } from './frames.js';
import { audioManager } from './audio-manager.js';
import { c } from './canvas.js';
import { img } from './img.js';

import { ASSET_URLS } from './urls.js';

const plumeImages = [
    img(ASSET_URLS['../img/plume-1_43x21.png']),
    img(ASSET_URLS['../img/plume-2_43x21.png']),
    img(ASSET_URLS['../img/plume-3_43x21.png']),
    img(ASSET_URLS['../img/plume-4_43x21.png']),
    img(ASSET_URLS['../img/plume-5_43x21.png']),
    img(ASSET_URLS['../img/plume-6_43x21.png']),
];
class Plumes {
    constructor() {
         /** @type {Plume[]} */ this.plumes = [];
    }
    add({ left, bottom, facingRight }) {
        this.plumes.push(new Plume({ left, bottom, facingRight }));
        audioManager.playLandSound();
    }
    update() {
        this.plumes = this.plumes.filter(plume => plume.frames.currentIndex < 5);
        this.draw();
    }
    draw() {
        this.plumes.forEach(plume => plume.draw());
    }
}
class Plume extends Coordinates {
    constructor({ left, bottom, facingRight }) {
        super({ x: left, y: bottom - 21, width: 43, height: 21 });
        this.frames = new Frames({ images: plumeImages, fps: 14 });
        this.facingRight = facingRight;
    }

    draw() {

        const img = this.frames.get();
        if (this.facingRight) {
            c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
        } else {
            c.save();
            c.scale(-1, 1);
            c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            c.restore();
        }
    }

}
export const plumes = new Plumes();