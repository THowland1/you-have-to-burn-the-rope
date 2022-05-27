import { Coordinates } from './coordinates';
import { c } from './canvas';
import { CHANDELIER_GRAVITY } from './consts';
import { timeManager } from './time-manager';
import { phaseManager } from './phase-manager';
import { boss } from './boss';
import { img } from './img';

import { ASSET_URLS } from './urls';
class Chandelier extends Coordinates {
  img = img(ASSET_URLS['../img/chandelier_160x96.png']);
  show = true;
  dropped = false;
  velocity = {
    y: 0,
  };

  constructor() {
    super({ x: 130 * 32, y: 12 * 32, width: 5 * 32, height: 3 * 32 });
  }
  draw() {
    this.img &&
      c.drawImage(
        this.img,
        this.localLeft,
        this.localTop,
        this.width,
        this.height
      );
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
