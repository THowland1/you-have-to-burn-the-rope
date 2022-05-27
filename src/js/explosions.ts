import { Coordinates } from './coordinates';
import { c } from './canvas';
import { Frames } from './frames';
import { img } from './img';

import { ASSET_URLS } from './urls';

const explosionImages = [
  img(ASSET_URLS['../img/explosion-1_36x36.png']),
  img(ASSET_URLS['../img/explosion-2_36x36.png']),
  img(ASSET_URLS['../img/explosion-3_36x36.png']),
  img(ASSET_URLS['../img/explosion-4_36x36.png']),
  img(ASSET_URLS['../img/explosion-5_36x36.png']),
  img(ASSET_URLS['../img/explosion-6_36x36.png']),
  img(ASSET_URLS['../img/explosion-7_36x36.png']),
];
interface ITopLeft {
  top: number;
  left: number;
}
class Explosions {
  explosions: Explosion[] = [];

  add({ left, top }: ITopLeft) {
    this.explosions.push(new Explosion({ left, top }));
  }
  update() {
    this.explosions = this.explosions.filter(
      (explosion) => explosion.frames.currentIndex < 6
    );
    this.draw();
  }
  draw() {
    this.explosions.forEach((explosion) => explosion.draw());
  }
}
class Explosion extends Coordinates {
  frames = new Frames({ images: explosionImages, fps: 14 });

  constructor({ left, top }: ITopLeft) {
    super({ x: left, y: top, width: 36, height: 36 });
  }

  draw() {
    c.drawImage(
      this.frames.get(),
      this.localLeft,
      this.localTop,
      this.width,
      this.height
    );
  }
}

export const explosions = new Explosions();
