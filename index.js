

import { audio } from './audio.js';
import { slides } from './slides.js';
import { FRAME_HEIGHT, FRAME_WIDTH, c, canvas } from './canvas.js';


const COURSE_WIDTH = 5120;
const COURSE_HEIGHT = 960;

const JUMP_SPEED = 16;
const BOSS_SPEED = 2;
const BOSS_MAXLEFT = 120 * 32;
const BOSS_MAXRIGHT = 145 * 32;

const SHOW_GRIDLINES = false;
const SHOW_PLATFORMS = false;




canvas.width = FRAME_WIDTH;
canvas.height = FRAME_HEIGHT;
const gravity = 1;
const CHANDELIER_GRAVITY = .1;
const speed = 5;
const offset = {
    x: 124 * 32,
    y: 5 * 32
};

class Frames {
    constructor({ images, fps, loop }) {
        this.fps = fps;
        this.images = images;
        this.frameUpdated = now;
        this.currentIndex = 0;
    }
    get() {
        if (now - this.frameUpdated > 1000 / this.fps) {
            this.frameUpdated = now;
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
        return this.images[this.currentIndex];
    }
}

async function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

class Coordinates {
    constructor({ x, y, height, width }) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    get left() { return this.x; }
    get right() { return this.left + this.width; }
    get center() { return this.left + (0.5 * this.width); }
    get top() { return this.y; }
    get bottom() { return this.top + this.height; }

    get localLeft() { return this.x - offset.x; }
    get localRight() { return this.localLeft + this.width; }
    get localTop() { return this.y - offset.y; }
    get localBottom() { return this.localTop + this.height; }

    intersectsX({ left, right }) {
        return (this.right >= left && this.right <= right) || (this.left >= left && this.right <= right);
    }

    intersectsY({ top, bottom }) {
        return (this.bottom <= bottom && this.bottom >= top) || (this.top <= bottom && this.top >= top);
    }

    intersects({ left, right, top, bottom }) {
        return this.intersectsX({ left, right }) && this.intersectsY({ top, bottom });
    }
}
function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}
class Player extends Coordinates {
    constructor({ x, y }) {
        super({ x, y, height: 36, width: 30 });
        this.hasFlame = true;
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
    }

    draw() {
        const torchOffset = { x: 0, y: 0 };
        let img;
        if (this.velocity.y > 0) {
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
    }
}
class HealthBar {
    constructor() {
        this.health = 1;
        this.deathTime = null;
    }
    die() {
        this.deathTime = new Date().valueOf();
    }
    update() {
        if (this.deathTime) {
            this.health = 1 * Math.exp(- (new Date().valueOf() - this.deathTime) / 200);
        }
        this.draw();
    }
    draw() {
        c.fillStyle = 'white';
        c.fillRect(16, 16, FRAME_WIDTH - 32, 20);
        c.fillRect(16, 32, 154, 24);
        c.fillStyle = 'black';
        c.fillRect(18, 18, FRAME_WIDTH - 36, 16);
        c.fillRect(18, 30, 150, 24);
        c.fillStyle = 'red';
        c.fillRect(20, 20, (FRAME_WIDTH - 40) * this.health, 12);
        c.fillStyle = 'white';
        c.textAlign = 'left';
        c.font = 'bold 14px Inter';
        c.fillText('Grinning Colossus', 28, 48);
    }
}
class Boss extends Coordinates {
    /**
     * Boss pattern
     * If player is X blocks away, do nothing (no changing mode, no acting)
     * If player is above, switch to 'looking up' sprite
     * If player is to the left, switch to 'looking left' sprite
     * If player is to the right, switch to 'looking right' sprite
     * Either in attack mode or move mode
     * Mode logic
     *  - 
     */
    constructor() {
        super({
            x: 129 * 32,
            y: 19 * 32,
            height: 8 * 32,
            width: 6 * 32,
        });
        this.mode = 'move';
        this.facingRight = false;
        /** @type {'living' | 'about-to-die' | 'dying' | 'dead'} */ this.state = 'living';//

        this.x = 129 * 32;
        this.y = 19 * 32;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.images = {
            attack: img('./sprites/boss-attack_204x256.png'),
            die: img('./sprites/boss-die_192x256.png'),
            lookup: img('./sprites/boss-lookup_192x256.png'),
            move: img('./sprites/boss-move_204x256.png'),
            still: img('./sprites/boss-still_204x256.png'),
        };
    }

    draw() {
        let img;
        img = this.images.move;
        if (this.state === 'dying') {
            img = this.images.die;
        } else if (this.top > player.bottom) {
            img = this.images.lookup;
        }
        if (this.facingRight) {
            c.drawImage(img, this.localLeft, this.localTop, this.width, this.height);
        } else {
            c.save();
            c.scale(-1, 1);
            c.drawImage(img, -1 * this.localRight, this.localTop, this.width, this.height);
            c.restore();
        }
    }
    update() {
        if (this.state === 'dead') {
            return;
        }
        this.draw();

        if (this.state === 'dying' || this.state === 'about-to-die') {
            return;
        }

        if (player.right < this.center && this.left >= BOSS_MAXLEFT) {
            this.x -= BOSS_SPEED;
            this.facingRight = false;
        } else if (player.left > this.center && this.right <= BOSS_MAXRIGHT) {
            this.x += BOSS_SPEED;
            this.facingRight = true;
        }
    }
}
class Platform extends Coordinates {
    constructor({ left, top, right, bottom }) {
        super({ x: left, y: top, width: right - left, height: bottom - top });
    }

    draw() {
        c.fillStyle = '#00f3';
        c.fillRect(this.localLeft, this.localTop, this.width, this.height);
    }
}

class Flame extends Coordinates {
    constructor({ left, top }) {
        super({ x: left, y: top, width: 1 * 32, height: 2 * 32 });
        this.img = new Image();
        this.img.src = './flame-sprites.png';
        this.framesPerSecond = 10;
        this.frameCount = 3;
        this.frameIndex = 0;
        this.frameUpdated = new Date().valueOf();
    }

    draw() {
        if (now - this.frameUpdated > 1000 / this.framesPerSecond) {
            this.frameIndex = (this.frameIndex + 1) % this.frameCount;
            this.frameUpdated = now;
        }
        const sx = this.frameIndex * 32;
        const sy = 0;
        const sw = this.width;
        const sh = this.height;
        const dx = this.localLeft;
        const dy = this.localTop;
        const dw = this.width;
        const dh = this.height;
        this.img && c.drawImage(this.img,
            sx,
            sy,
            sw,
            sh,
            dx,
            dy,
            dw,
            dh,
        );
    }
}
const explosionImages = [
    img('./sprites/explosion-1_36x36.png'),
    img('./sprites/explosion-2_36x36.png'),
    img('./sprites/explosion-3_36x36.png'),
    img('./sprites/explosion-4_36x36.png'),
    img('./sprites/explosion-5_36x36.png'),
    img('./sprites/explosion-6_36x36.png'),
    img('./sprites/explosion-7_36x36.png'),
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
        this.img = new Image();
        this.frames = new Frames({ images: explosionImages, fps: 14 });
        this.startTime = new Date();
        this.finished = false;
    }

    draw() {
        c.drawImage(this.frames.get(), this.localLeft, this.localTop, this.width, this.height);
    }

}

class LeftPlatform extends Platform {
    constructor({ top, right, bottom }) {
        super({ left: right - 32, top, right, bottom });
    }
}
class RightPlatform extends Platform {
    constructor({ left, top, bottom }) {
        super({ left, top, right: left + 32, bottom });
    }
}
class BottomPlatform extends Platform {
    constructor({ left, top, right }) {
        super({ left, top, right, bottom: top + 32 });
    }
}
class TopPlatform extends Platform {
    constructor({ left, right, bottom }) {
        super({ left, top: bottom - 32, right, bottom });
    }
}
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
};
class Rope extends Coordinates {
    constructor() {
        super({ x: (132 * 32) + 12, y: 6 * 32, width: 8, height: 6 * 32 });
        this.img = new Image();
        this.img.src = './sprites/rope_8x192.png';
        this.show = true;
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
        this.img && c.drawImage(this.img,
            dx,
            dy,
            dw,
            dh,
        );
    }
}
class Chandelier extends Coordinates {
    constructor() {
        super({ x: 130 * 32, y: 12 * 32, width: 5 * 32, height: 3 * 32 });
        this.img = new Image();
        this.img.src = './sprites/chandelier_160x96.png';
        this.show = true;
        this.dropped = false;
        this.velocity = {
            y: 0
        };
    }
    draw() {
        this.img && c.drawImage(this.img, this.localLeft, this.localTop, this.width, this.height);
    }
    update() {
        if (!this.show) {
            return;
        }
        if (this.dropped) {
            this.velocity.y += CHANDELIER_GRAVITY;
            this.y += this.velocity.y;
        }
        this.draw();
    }
}

class BG {
    constructor() {
        this.img = new Image();
        this.img.src = './bg.png';
    }
    draw() {
        const sx = offset.x;
        const sy = offset.y;
        const sw = FRAME_WIDTH;
        const sh = FRAME_HEIGHT;
        const dx = 0;
        const dy = 0;
        const dw = FRAME_WIDTH;
        const dh = FRAME_HEIGHT;
        this.img && c.drawImage(this.img,
            sx,
            sy,
            sw,
            sh,
            dx,
            dy,
            dw,
            dh,
        );
    }
}

const bg = new BG();
let now = new Date().valueOf();

const player = new Player({
    x: 127 * 32,
    y: 6 * 32,
});
const boss = new Boss();
const rope = new Rope();
const chandelier = new Chandelier();
const explosions = new Explosions();
const healthBar = new HealthBar();
const flames = [
    new Flame({ left: 109 * 32, top: 18 * 32 }),
    new Flame({ left: 111 * 32, top: 13 * 32 }),
    new Flame({ left: 109 * 32, top: 8 * 32 }),
    new Flame({ left: 155 * 32, top: 18 * 32 }),
    new Flame({ left: 153 * 32, top: 13 * 32 }),
    new Flame({ left: 155 * 32, top: 8 * 32 }),
];
const platforms = [
    // Tunnel
    new RightPlatform({ left: 6 * 32, top: 0 * 32, bottom: 15 * 32 }), // right
    new LeftPlatform({ top: 0 * 32, right: 4 * 32, bottom: 18 * 32 }), // left
    new TopPlatform({ left: 6 * 32, right: 48 * 32, bottom: 15 * 32 }), // top: ;
    new BottomPlatform({ left: 3 * 32, top: 17 * 32, right: 51 * 32 }), // bottom

    new RightPlatform({ left: 50 * 32, top: 13 * 32, bottom: 18 * 32 }), // right
    new LeftPlatform({ top: 10 * 32, right: 48 * 32, bottom: 15 * 32 }), // left
    new TopPlatform({ left: 47 * 32, right: 63 * 32, bottom: 11 * 32 }), // top
    new BottomPlatform({ left: 50 * 32, top: 13 * 32, right: 60 * 32 }), // bottom

    new RightPlatform({ left: 62 * 32, top: 10 * 32, bottom: 15 * 32 }), // right
    new LeftPlatform({ top: 13 * 32, right: 60 * 32, bottom: 18 * 32 }), // left
    new TopPlatform({ left: 62 * 32, right: 84 * 32, bottom: 15 * 32 }), // top
    new BottomPlatform({ left: 59 * 32, top: 17 * 32, right: 81 * 32 }), // bottom

    new RightPlatform({ left: 83 * 32, top: 14 * 32, bottom: 20 * 32 }), // right
    new LeftPlatform({ top: 17 * 32, right: 81 * 32, bottom: 23 * 32 }), // left
    new TopPlatform({ left: 83 * 32, right: 92 * 32, bottom: 20 * 32 }), // top
    new BottomPlatform({ left: 80 * 32, top: 22 * 32, right: 89 * 32 }), // bottom

    new RightPlatform({ left: 91 * 32, top: 19 * 32, bottom: 25 * 32 }), // right
    new LeftPlatform({ top: 22 * 32, right: 89 * 32, bottom: 28 * 32 }), // left
    new TopPlatform({ left: 91 * 32, right: 109 * 32, bottom: 25 * 32 }), // top
    new BottomPlatform({ left: 88 * 32, top: 27 * 32, right: 158 * 32 }), // bottom

    // Left wall
    new LeftPlatform({ top: 5 * 32, right: 108 * 32, bottom: 24 * 32 }), // left
    new RightPlatform({ left: 113 * 32, top: 12 * 32, bottom: 19 * 32 }), // right

    new RightPlatform({ top: 22 * 32, left: 113 * 32, bottom: 25 * 32 }), // left: ;
    new Platform({ left: 113 * 32, top: 24 * 32, right: 117 * 32, bottom: 25 * 32 }), // top
    new Platform({ left: 110 * 32, top: 21 * 32, right: 111 * 32, bottom: 22 * 32 }), // top, left, bottom
    new Platform({ left: 111 * 32, top: 20 * 32, right: 112 * 32, bottom: 21 * 32 }), // top, left
    new Platform({ left: 112 * 32, top: 19 * 32, right: 113 * 32, bottom: 20 * 32 }), // top, left

    new Platform({ left: 110 * 32, top: 16 * 32, right: 111 * 32, bottom: 17 * 32 }), // top, right, bottom
    new Platform({ left: 109 * 32, top: 15 * 32, right: 110 * 32, bottom: 16 * 32 }), // top, right
    new Platform({ left: 108 * 32, top: 14 * 32, right: 109 * 32, bottom: 15 * 32 }), // top, right

    new Platform({ left: 110 * 32, top: 11 * 32, right: 111 * 32, bottom: 12 * 32 }), // top, left, bottom
    new Platform({ left: 111 * 32, top: 10 * 32, right: 112 * 32, bottom: 11 * 32 }), // top, left
    new Platform({ left: 112 * 32, top: 9 * 32, right: 113 * 32, bottom: 10 * 32 }), // top, left

    new Platform({ left: 112 * 32, top: 9 * 32, right: 115 * 32, bottom: 10 * 32 }), // bottom, left
    new Platform({ left: 107 * 32, top: 5 * 32, right: 115 * 32, bottom: 6 * 32 }), // bottom, left
    new Platform({ left: 110 * 32, top: 11 * 32, right: 114 * 32, bottom: 12 * 32 }), // bottom, left
    new Platform({ left: 108 * 32, top: 16 * 32, right: 111 * 32, bottom: 17 * 32 }), // bottom, right
    new Platform({ left: 110 * 32, top: 21 * 32, right: 113 * 32, bottom: 22 * 32 }), // bottom, left

    // Right wall
    new TopPlatform({ left: 148 * 32, right: 152 * 32, bottom: 25 * 32 }), // top
    new RightPlatform({ left: 148 * 32, top: 24 * 32, bottom: 25 * 32 }), // right
    new BottomPlatform({ left: 148 * 32, top: 24 * 32, right: 150 * 32 }), // bottom

    new RightPlatform({ left: 154 * 32, top: 26 * 32, bottom: 27 * 32 }), // right
    new RightPlatform({ left: 155 * 32, top: 25 * 32, bottom: 26 * 32 }), // right
    new RightPlatform({ left: 156 * 32, top: 24 * 32, bottom: 25 * 32 }), // right
    new RightPlatform({ left: 157 * 32, top: 17 * 32, bottom: 24 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 26 * 32 }), // right
    new BottomPlatform({ left: 155 * 32, right: 156 * 32, top: 25 * 32 }), // right
    new BottomPlatform({ left: 156 * 32, right: 157 * 32, top: 24 * 32 }), // right
    new LeftPlatform({ right: 152 * 32, top: 22 * 32, bottom: 25 * 32 }), // right

    new TopPlatform({ left: 152 * 32, right: 155 * 32, bottom: 22 * 32 }), // top
    new LeftPlatform({ right: 155 * 32, top: 21 * 32, bottom: 22 * 32 }), // right
    new LeftPlatform({ right: 154 * 32, top: 20 * 32, bottom: 21 * 32 }), // right
    new LeftPlatform({ right: 153 * 32, top: 19 * 32, bottom: 20 * 32 }), // right
    new BottomPlatform({ left: 152 * 32, right: 153 * 32, top: 19 * 32 }), // right
    new BottomPlatform({ left: 153 * 32, right: 154 * 32, top: 20 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 21 * 32 }), // right
    new LeftPlatform({ right: 152 * 32, top: 12 * 32, bottom: 19 * 32 }), // right

    new RightPlatform({ left: 154 * 32, top: 16 * 32, bottom: 17 * 32 }), // right
    new RightPlatform({ left: 155 * 32, top: 15 * 32, bottom: 16 * 32 }), // right
    new RightPlatform({ left: 156 * 32, top: 14 * 32, bottom: 15 * 32 }), // right
    new RightPlatform({ left: 157 * 32, top: 6 * 32, bottom: 14 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 16 * 32 }), // right
    new BottomPlatform({ left: 155 * 32, right: 156 * 32, top: 15 * 32 }), // right
    new BottomPlatform({ left: 156 * 32, right: 157 * 32, top: 14 * 32 }), // right
    new TopPlatform({ left: 154 * 32, right: 157 * 32, bottom: 17 * 32 }), // top

    new TopPlatform({ left: 152 * 32, right: 155 * 32, bottom: 12 * 32 }), // top
    new LeftPlatform({ right: 155 * 32, top: 11 * 32, bottom: 12 * 32 }), // right
    new LeftPlatform({ right: 154 * 32, top: 10 * 32, bottom: 11 * 32 }), // right
    new LeftPlatform({ right: 153 * 32, top: 9 * 32, bottom: 10 * 32 }), // right
    new BottomPlatform({ left: 150 * 32, right: 153 * 32, top: 9 * 32 }), // right
    new BottomPlatform({ left: 153 * 32, right: 154 * 32, top: 10 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 11 * 32 }), // right

    // Ceiling
    new Platform({ left: 115 * 32, top: 10 * 32, right: 117 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 119 * 32, top: 10 * 32, right: 121 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 123 * 32, top: 10 * 32, right: 125 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 127 * 32, top: 10 * 32, right: 129 * 32, bottom: 11 * 32 }), // bottom

    new Platform({ left: 136 * 32, top: 10 * 32, right: 138 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 140 * 32, top: 10 * 32, right: 142 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 144 * 32, top: 10 * 32, right: 146 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 148 * 32, top: 10 * 32, right: 150 * 32, bottom: 11 * 32 }), // bottom

    new TopPlatform({ left: 150 * 32, right: 157 * 32, bottom: 6 * 32 }), // top
    new TopPlatform({ left: 115 * 32, right: 150 * 32, bottom: 5 * 32 }), // top
    new TopPlatform({ left: 132 * 32, right: 133 * 32, bottom: 6 * 32 }), // top
    new LeftPlatform({ right: 133 * 32, top: 5 * 32, bottom: 6 * 32 }), // right
    new RightPlatform({ left: 132 * 32, top: 5 * 32, bottom: 6 * 32 }), // right

    // Atrium
    new LeftPlatform({ right: 115 * 32, top: 11 * 32, bottom: 24 * 32 }), // right
    new Platform({ left: 118 * 32, top: 20 * 32, right: 120 * 32, bottom: 21 * 32 }),
    new Platform({ left: 122 * 32, top: 17 * 32, right: 124 * 32, bottom: 18 * 32 }),
    new Platform({ left: 128 * 32, top: 16 * 32, right: 130 * 32, bottom: 17 * 32 }),
    new Platform({ left: 135 * 32, top: 16 * 32, right: 137 * 32, bottom: 17 * 32 }),
    new Platform({ left: 141 * 32, top: 17 * 32, right: 143 * 32, bottom: 18 * 32 }),
    new Platform({ left: 145 * 32, top: 20 * 32, right: 147 * 32, bottom: 21 * 32 }),
    new RightPlatform({ left: 150 * 32, top: 11 * 32, bottom: 24 * 32 }), // right

];


addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (player.velocity.y === 0) {
                player.velocity.y -= JUMP_SPEED;
            }
            break;
        case 'ArrowRight':
            keys.right.pressed = true;
            player.facingRight = true;
            break;
        case 'ArrowLeft':
            keys.left.pressed = true;
            player.facingRight = false;
            break;
        case 'x':
            audio.play();
        default:
            break;
    }
});
addEventListener('keyup', e => {
    switch (e.key) {
        case 'ArrowRight':
            keys.right.pressed = false;
            break;
        case 'ArrowLeft':
            keys.left.pressed = false;
            break;

        default:
            break;
    }
});
const creditsBg = img('./sprites/credits-bg_704x512.png');
function animate() {
    now = new Date().valueOf();
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    bg.draw();

    boss.update();
    player.update();
    rope.update();
    chandelier.update();
    explosions.update();
    healthBar.update();

    flames.forEach(flame => flame.draw());

    c.drawImage(creditsBg, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    slides.forEach(slide => slide.draw());

    if (player.hasFlame && player.intersects(rope)) {
        player.hasFlame = false;
        (async function () {
            explosions.add({ left: 132 * 32, top: 6 * 32 });
            await wait(200);
            explosions.add({ left: 132 * 32, top: 7 * 32 });
            await wait(200);
            explosions.add({ left: 132 * 32, top: 8 * 32 });
            await wait(200);
            explosions.add({ left: 132 * 32, top: 9 * 32 });
            await wait(200);
            explosions.add({ left: 132 * 32, top: 10 * 32 });
            chandelier.dropped = true;
            boss.state = 'about-to-die';
            await wait(1200);
            healthBar.die();
            boss.state = 'dying';
            chandelier.show = false;
            rope.show = false;
            explosions.add({ left: 4291, top: 642 });
            explosions.add({ left: 4283, top: 676 });
            explosions.add({ left: 4264, top: 681 });
            explosions.add({ left: 4282, top: 688 });
            explosions.add({ left: 4186, top: 621 });
            explosions.add({ left: 4194, top: 649 });
            explosions.add({ left: 4203, top: 642 });
            explosions.add({ left: 4223, top: 664 });
            explosions.add({ left: 4219, top: 668 });
            explosions.add({ left: 4203, top: 686 });
            explosions.add({ left: 4200, top: 670 });
            explosions.add({ left: 4200, top: 700 });
            explosions.add({ left: 4205, top: 792 });
            explosions.add({ left: 4248, top: 730 });
            explosions.add({ left: 4154, top: 686 });
            explosions.add({ left: 4126, top: 725 });
            explosions.add({ left: 4214, top: 598 });
            await wait(300);
            explosions.add({ left: 4159, top: 654 });
            await wait(300);
            explosions.add({ left: 4161, top: 706 });
            await wait(300);
            explosions.add({ left: 4274, top: 851 });
            await wait(300);
            explosions.add({ left: 4206, top: 734 });
            await wait(300);
            explosions.add({ left: 4192, top: 733 });
            await wait(300);
            explosions.add({ left: 4203, top: 732 });
            await wait(300);
            explosions.add({ left: 4252, top: 546 });
            await wait(300);
            boss.state = 'dead';

            explosions.add({ left: 4237, top: 560 });
            explosions.add({ left: 4205, top: 596 });
            explosions.add({ left: 4251, top: 603 });
            explosions.add({ left: 4231, top: 642 });
            explosions.add({ left: 4295, top: 644 });
            explosions.add({ left: 4249, top: 656 });
            explosions.add({ left: 4243, top: 681 });
            explosions.add({ left: 4203, top: 684 });
            explosions.add({ left: 4266, top: 684 });
            explosions.add({ left: 4219, top: 692 });
            explosions.add({ left: 4215, top: 700 });
            explosions.add({ left: 4293, top: 730 });
            explosions.add({ left: 4126, top: 740 });
            explosions.add({ left: 4187, top: 746 });
            explosions.add({ left: 4224, top: 750 });
            explosions.add({ left: 4199, top: 767 });
            explosions.add({ left: 4176, top: 768 });
            explosions.add({ left: 4296, top: 813 });
            explosions.add({ left: 4161, top: 820 });
            explosions.add({ left: 4179, top: 844 });
            explosions.add({ left: 4180, top: 882 });
        })();
    }

    if (SHOW_PLATFORMS) {
        platforms.forEach(platform => platform.draw());
    }

    if (SHOW_GRIDLINES) {
        c.fillStyle = 'white';

        Array.from(Array(COURSE_WIDTH / (32 * 4))).forEach((_, x) => {
            c.fillRect((x * (32 * 4)) - offset.x, 0, 1, FRAME_HEIGHT);
            c.fillText(`${x * 4}`, (x * (32 * 4)) - offset.x, 10);
        }
        );

        Array.from(Array(COURSE_HEIGHT / (32 * 5))).forEach((_, y) => {
            c.fillRect(0, (y * (32 * 5)) - offset.y, FRAME_WIDTH, 1);
            c.fillText(`${y * 5}`, 10, (y * (32 * 5)) - offset.y);
        }
        );
    }

    // # Update velocity for next frame

    if (keys.right.pressed) {
        player.velocity.x = speed;
    } else if (keys.left.pressed) {
        player.velocity.x = -speed;
    } else {
        player.velocity.x = 0;
    }

    if (player.localRight > 400 && offset.x + FRAME_WIDTH < COURSE_WIDTH && player.velocity.x > 0) {
        offset.x += player.velocity.x;
    } else if (player.localLeft < 200 && offset.x > 0 && player.velocity.x < 0) {
        offset.x += player.velocity.x;
    }
    if (player.localTop < 175 && offset.y > 0 && player.velocity.y < 0) {
        offset.y += player.velocity.y;
    } else if (player.localBottom > 200 && offset.y + FRAME_HEIGHT < COURSE_HEIGHT && player.velocity.y > 0) {
        offset.y += player.velocity.y;
    }

    platforms.forEach(platform => {
        if (player.right >= platform.left && player.left <= platform.right) {
            if (player.bottom <= platform.top &&
                player.bottom + player.velocity.y >= platform.top
            ) {
                player.velocity.y = 0;
            }
            if (player.top >= platform.bottom &&
                player.top + player.velocity.y <= platform.bottom
            ) {
                player.velocity.y = 0;
            }
        }

        if (player.bottom >= platform.top && player.top <= platform.bottom) {
            if (player.right <= platform.left &&
                player.right + player.velocity.x >= platform.left
            ) {
                player.velocity.x = 0;
            }
            if (player.left >= platform.right &&
                player.left + player.velocity.x <= platform.right
            ) {
                player.velocity.x = 0;
            }
        }
    });
}
animate();
