import { Coordinates } from './coordinates';
import { c } from './canvas';
import { boss } from './boss';
import { healthBar } from './healthbar';
import { timeManager } from './time-manager';
import { audioManager } from './audio-manager';
import { AXE_SPEED_X, AXE_SPEED_Y, AXE_GRAVITY } from './consts';
import { img } from './img';

import { ASSET_URLS } from './urls';

const axeImg = img(ASSET_URLS['../img/axe_18x18.png']);

interface IAxe {
  left: number;
  top: number;
  shootRight: boolean;
}
class Axes {
  axes: Axe[] = [];
  add({ left, top, shootRight }: IAxe) {
    this.axes.push(new Axe({ left, top, shootRight }));
    audioManager.playAxeThrowSound();
  }
  update() {
    this.axes = this.axes.filter(
      (axe) => timeManager.now - axe.startTime < 6000 && !axe.hitBoss
    );
    this.axes.forEach((axe) => axe.update());
  }
}
class Axe extends Coordinates {
  img = axeImg;
  startTime = new Date().valueOf();
  angle = 0;
  finished = false;
  velocity = -AXE_SPEED_Y;
  turnsPerSecond = 0.25;
  shootRight: boolean;
  hitBoss = false;

  constructor({ left, top, shootRight }: IAxe) {
    super({ x: left, y: top, width: 18, height: 18 });
    this.shootRight = shootRight;
  }

  update() {
    if (this.intersects(boss)) {
      this.hitBoss = true;
      healthBar.health -= 0.01;
    }
    this.x += AXE_SPEED_X * timeManager.msPerFrame * (this.shootRight ? 1 : -1);
    this.velocity += AXE_GRAVITY * timeManager.msPerFrame;
    this.y += this.velocity * timeManager.msPerFrame;
    this.angle +=
      (2 * Math.PI * this.turnsPerSecond * (timeManager.now - this.startTime)) /
      1000;
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
