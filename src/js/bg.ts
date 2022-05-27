import { c, FRAME_HEIGHT, FRAME_WIDTH } from './canvas';
import { offset } from './coordinates';
import { img } from './img';
import { ASSET_URLS } from './urls';

class BG {
  img = img(ASSET_URLS['../img/bg.png']);
  draw() {
    const sx = offset.x;
    const sy = offset.y;
    const sw = FRAME_WIDTH;
    const sh = FRAME_HEIGHT;
    const dx = 0;
    const dy = 0;
    const dw = FRAME_WIDTH;
    const dh = FRAME_HEIGHT;
    this.img && c.drawImage(this.img, sx, sy, sw, sh, dx, dy, dw, dh);
  }
}

export const bg = new BG();
