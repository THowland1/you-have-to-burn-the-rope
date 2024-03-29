import { Coordinates } from './coordinates';
import { c } from './canvas';
import { img } from './img';

import { ASSET_URLS } from './urls';

class FlammableBitOfRope extends Coordinates {
  constructor() {
    super({ x: 132 * 32 + 12, y: 6 * 32, width: 8, height: 4.25 * 32 });
  }
}

class Rope extends Coordinates {
  img = img(ASSET_URLS['../img/rope_8x192.png']);
  show = true;
  flammableBitOfRope = new FlammableBitOfRope();

  constructor() {
    super({ x: 132 * 32 + 12, y: 6 * 32, width: 8, height: 6 * 32 });
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
    this.img && c.drawImage(this.img, dx, dy, dw, dh);
  }
}

export const rope = new Rope();
