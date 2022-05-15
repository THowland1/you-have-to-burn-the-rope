import { c } from './canvas.js';
import { COURSE_HEIGHT, gravity, JUMP_SPEED } from './consts.js';
import { Coordinates } from './coordinates.js';
import { Frames } from './frames.js';
import { flames } from './flames.js';
import { plumes } from './plumes.js';
import { boss } from './boss.js';
import { timeManager } from './time-manager.js';
import { axes } from './axes.js';

function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}

export class Player extends Coordinates {
    constructor({ x, y }) {
        super({ x, y, height: 36, width: 30 });
        this.hasFlame = false;
        this.facingRight = true;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.images = {
            fall: img('./sprites/player-fall_30x36.png'),
            hit: img('./sprites/player-hit_30x36.png'),
            jump: img('./sprites/player-jump_30x36.png'),
            still: img('./sprites/player-still_30x36.png'),
            throw: img('./sprites/player-throw_30x36.png'),
            walk1: img('./sprites/player-walk-1_30x36.png'),
            walk2: img('./sprites/player-walk-2_30x36.png'),
            walk3: img('./sprites/player-walk-3_30x36.png'),
            stick: img('./sprites/stick_30x6.png'),
            flame1: img('./sprites/flame-1_28x28.png'),
            flame2: img('./sprites/flame-2_28x28.png'),
            flame3: img('./sprites/flame-3_28x28.png'),
        };
        this.walkFrames = new Frames({ fps: 12, images: [this.images.walk3, this.images.walk2, this.images.walk1] });
        this.flameFrames = new Frames({ fps: 12, images: [this.images.flame1, this.images.flame2, this.images.flame3] });
        this.lastAttack = 0;
        this.lastHit = 0;
    }

    get flying() {
        return (timeManager.now - this.lastHit) < 500;
    }

    get stunned() {
        return (timeManager.now - this.lastHit) < 1500;
    }
    get blinking() {
        return (timeManager.now - this.lastHit) < 2000;
    }

    attack() {
        this.hasFlame = false;
        this.lastAttack = new Date().valueOf();
        axes.add({ left: player.left + 0.5 * player.width, top: player.top + 0.5 * player.height, shootRight: this.facingRight });
    }

    land() {
        plumes.add({ left: this.left - 43, bottom: this.bottom, facingRight: false });
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
            if ((sinceHit % 500) > 300) {
                return;
            }
        }

        if (this.facingRight) {
            c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
            if (this.hasFlame) {
                c.drawImage(this.images.stick, this.localLeft + 5 + torchOffset.x, this.localTop + 18 + torchOffset.y, 30, 6);
                c.drawImage(this.flameFrames.get(), this.localLeft + 20 + torchOffset.x, this.localTop - 7 + torchOffset.y, 28, 28);
            }
        } else {
            c.save();
            c.scale(-1, 1);
            c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            if (this.hasFlame) {
                c.drawImage(this.images.stick, - this.localRight + 5 + torchOffset.x, this.localTop + 18 + torchOffset.y, 30, 6);
                c.drawImage(this.flameFrames.get(), -this.localRight + 20 + torchOffset.x, this.localTop - 7 + torchOffset.y, 28, 28);
            }
            c.restore();
        }
    }

    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.y + this.height + this.velocity.y <= COURSE_HEIGHT) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }

        if (!this.hasFlame) {
            this.hasFlame = flames.some(flame => this.intersects(flame));
        }

        if (this.intersects(boss)) {
            this.hurtByBoss();
        }
    }
}



export const player = new Player({
    x: 4 * 32,
    y: 0 * 32,
});
// export const player = new Player({
//     x: 127 * 32,
//     y: 8.5 * 32,
// });