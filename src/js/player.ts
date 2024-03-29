import { audioManager } from './audio-manager';
import { axes } from './axes';
import { c } from './canvas';
import {
  JUMP_SPEED,
  PLAYER_ATTACKINTERVAL,
  PLAYER_GRAVITY,
  WALKING_SPEED,
} from './consts';
import { Coordinates } from './coordinates';
import { flames } from './flames';
import { boss } from './boss';
import { Frames } from './frames';
import { phaseManager, PHASES } from './phase-manager';
import { platforms } from './platforms';
import { plumes } from './plumes';
import { timeManager } from './time-manager';
import { img } from './img';

import { ASSET_URLS } from './urls';
import { keyManager } from './key-manager';

interface IPlayer {
  x: number;
  y: number;
}
export class Player extends Coordinates {
  hasFlame = false;
  facingRight = true;
  /** px per frame */ velocity = { x: 0, y: 0 };
  images = {
    fall: img(ASSET_URLS['../img/player-fall_30x36.png']),
    hit: img(ASSET_URLS['../img/player-hit_30x36.png']),
    jump: img(ASSET_URLS['../img/player-jump_30x36.png']),
    still: img(ASSET_URLS['../img/player-still_30x36.png']),
    throw: img(ASSET_URLS['../img/player-throw_30x36.png']),
    walk1: img(ASSET_URLS['../img/player-walk-1_30x36.png']),
    walk2: img(ASSET_URLS['../img/player-walk-2_30x36.png']),
    walk3: img(ASSET_URLS['../img/player-walk-3_30x36.png']),
    stick: img(ASSET_URLS['../img/stick_30x6.png']),
    flame1: img(ASSET_URLS['../img/flame-1_28x28.png']),
    flame2: img(ASSET_URLS['../img/flame-2_28x28.png']),
    flame3: img(ASSET_URLS['../img/flame-3_28x28.png']),
  };
  walkFrames = new Frames({
    fps: 12,
    images: [this.images.walk3, this.images.walk2, this.images.walk1],
  });
  flameFrames = new Frames({
    fps: 12,
    images: [this.images.flame1, this.images.flame2, this.images.flame3],
  });
  lastAttack = 0;
  lastHit = 0;
  constructor({ x, y }: IPlayer) {
    super({ x, y, height: 36, width: 30 });
  }

  get flying() {
    return timeManager.now - this.lastHit < 500;
  }

  get stunned() {
    return timeManager.now - this.lastHit < 1500;
  }
  get blinking() {
    return timeManager.now - this.lastHit < 2000;
  }

  get nextFrame() {
    return new Coordinates({
      x: this.x + this.velocity.x * timeManager.msPerFrame,
      y: this.y + this.velocity.y * timeManager.msPerFrame,
      width: this.width,
      height: this.height,
    });
  }

  attack() {
    this.hasFlame = false;
    this.lastAttack = new Date().valueOf();
    axes.add({
      left: this.left + 0.5 * this.width,
      top: this.top + 0.5 * this.height,
      shootRight: this.facingRight,
    });
  }

  land() {
    plumes.add({
      left: this.left - 43,
      bottom: this.bottom,
      facingRight: false,
    });
    plumes.add({ left: this.right, bottom: this.bottom, facingRight: true });
  }

  hurtByBoss() {
    this.hasFlame = false;
    this.lastHit = new Date().valueOf();
    this.velocity.x = (this.facingRight ? -1 : 1) * JUMP_SPEED;
  }
  hurtByLaser() {
    this.hasFlame = false;
    if (!this.blinking) {
      this.velocity.y = -JUMP_SPEED;
      this.lastHit = new Date().valueOf();
    }
  }

  draw() {
    const torchOffset = { x: 0, y: 0 };
    let img;
    if (this.flying) {
      img = this.images.hit;
    } else if (timeManager.now - this.lastAttack < 100) {
      img = this.images.throw;
    } else if (this.velocity.y > 0) {
      img = this.images.fall;
      torchOffset.x = 1;
      torchOffset.y = -6;
    } else if (this.velocity.y < 0) {
      img = this.images.jump;
      torchOffset.x = 1;
    } else if (this.velocity.x !== 0) {
      img = this.walkFrames.get();
      torchOffset.x = 1;
    } else {
      img = this.images.still;
    }

    if (this.blinking) {
      const sinceHit = timeManager.now - this.lastHit;
      if (sinceHit % 500 > 300) {
        return;
      }
    }

    if (this.facingRight) {
      c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
      if (this.hasFlame) {
        c.drawImage(
          this.images.stick,
          this.localLeft + 5 + torchOffset.x,
          this.localTop + 18 + torchOffset.y,
          30,
          6
        );
        c.drawImage(
          this.flameFrames.get(),
          this.localLeft + 20 + torchOffset.x,
          this.localTop - 7 + torchOffset.y,
          28,
          28
        );
      }
    } else {
      c.save();
      c.scale(-1, 1);
      c.drawImage(
        img,
        -1 * this.localRight,
        this.localTop,
        this.width,
        this.height
      );
      if (this.hasFlame) {
        c.drawImage(
          this.images.stick,
          -this.localRight + 5 + torchOffset.x,
          this.localTop + 18 + torchOffset.y,
          30,
          6
        );
        c.drawImage(
          this.flameFrames.get(),
          -this.localRight + 20 + torchOffset.x,
          this.localTop - 7 + torchOffset.y,
          28,
          28
        );
      }
      c.restore();
    }
  }

  update() {
    // Update Y velocity
    this.velocity.y += PLAYER_GRAVITY * timeManager.msPerFrame;

    // Update X velocity

    if (this.flying) {
      this.velocity.x *= 0.9;
    } else if (keyManager.keys.right.pressed) {
      this.velocity.x = WALKING_SPEED;
    } else if (keyManager.keys.left.pressed) {
      this.velocity.x = -WALKING_SPEED;
    } else {
      this.velocity.x = 0;
    }

    platforms.forEach((platform) => {
      if (
        (this.right > platform.left && this.left < platform.right) ||
        (this.nextFrame.right > platform.left &&
          this.nextFrame.left < platform.right)
      ) {
        if (
          this.bottom <= platform.top &&
          this.nextFrame.bottom >= platform.top
        ) {
          this.y = platform.y - this.height;
          if (this.velocity.y > 0.1 * timeManager.msPerFrame) {
            this.land();
          }
          this.velocity.y = 0;
        } else if (
          this.top >= platform.bottom &&
          this.nextFrame.top <= platform.bottom
        ) {
          this.y = platform.bottom;
          this.velocity.y = 0;
        }
      }

      if (
        (this.bottom > platform.top && this.top < platform.bottom) ||
        (this.nextFrame.bottom > platform.top &&
          this.nextFrame.top < platform.bottom)
      ) {
        if (
          this.right <= platform.left &&
          this.nextFrame.right >= platform.left
        ) {
          this.x = platform.left - this.width;
          this.velocity.x = 0;
        }
        if (
          this.left >= platform.right &&
          this.nextFrame.left <= platform.right
        ) {
          this.x = platform.right;
          this.velocity.x = 0;
        }
      }
    });

    this.x += this.velocity.x * timeManager.msPerFrame;
    this.y += this.velocity.y * timeManager.msPerFrame;

    if (!this.hasFlame) {
      this.hasFlame = flames.some((flame) => this.intersects(flame));
    }

    this.draw();

    if (this.intersects(boss)) {
      this.hurtByBoss();
    }
  }
}

//start
export const player = new Player({
  x: 4 * 32,
  y: 0 * 32,
});

//rope
// export const player = new Player({
//     x: 127 * 32,
//     y: 8.5 * 32,
// });

//bottomright
// export const player = new Player({
//     x: 152 * 32,
//     y: 23.5 * 32,
// });
