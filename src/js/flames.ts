import { Coordinates } from './coordinates';
import { timeManager } from './time-manager';
import { c } from './canvas';
import { img } from './img';

import { ASSET_URLS } from './urls';

interface ITopLeft {
  left: number;
  top: number;
}
export class Flame extends Coordinates {
  img = img(ASSET_URLS['../img/flame-sprites.png']);

  framesPerSecond = 10;
  frameCount = 3;
  frameIndex = 0;
  frameUpdated = new Date().valueOf();

  constructor({ left, top }: ITopLeft) {
    super({ x: left, y: top, width: 1 * 32, height: 2 * 32 });
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
    this.img && c.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
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
