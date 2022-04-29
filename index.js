const canvas = document.querySelector('canvas');
const debugPlayer = document.querySelector('#debug-player');
const debugOffset = document.querySelector('#debug-offset');
const c = canvas.getContext('2d');

const FRAME_WIDTH = 22 * 32;
const FRAME_HEIGHT = 16 * 32;
const COURSE_WIDTH = 5120;
const COURSE_HEIGHT = 960;

const JUMP_SPEED = 16;
const BOSS_SPEED = 2;
const BOSS_MAXLEFT = 120 * 32;
const BOSS_MAXRIGHT = 145 * 32;

const SHOW_GRIDLINES = true;
const SHOW_PLATFORMS = false;

canvas.width = FRAME_WIDTH;
canvas.height = FRAME_HEIGHT;
const gravity = 1;
const speed = 5;
const offset = {
    x: 104 * 32,
    y: 15 * 32
};

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
class Player extends Coordinates {
    constructor({ x, y, height, width }) {
        super({ x, y, height, width });
        this.hasFlame = false;
        this.velocity = {
            x: 0,
            y: 0
        };
    }

    draw() {
        c.fillStyle = this.hasFlame ? 'orange' : 'red';
        c.fillRect(this.localLeft, this.localTop, this.width, this.height);
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

        this.x = 129 * 32;
        this.y = 19 * 32;
        this.velocity = {
            x: 0,
            y: 0
        };
    }

    draw() {
        c.fillStyle = 'black';
        c.fillRect(this.localLeft, this.localTop, this.width, this.height);
    }
    update() {
        this.draw();

        if (player.right < this.center && this.left >= BOSS_MAXLEFT) {
            this.x -= BOSS_SPEED;
        } else if (player.left > this.center && this.right <= BOSS_MAXRIGHT) {
            this.x += BOSS_SPEED;
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
        this.img.src = './rope.png';
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
function animate() {
    now = new Date().valueOf();
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    bg.draw();

    boss.update();
    player.update();
    rope.draw();

    flames.forEach(flame => flame.draw());

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

    // if (player.position.y < 100 && offset.y > -4321 && player.velocity.y < 0) {
    //     offset.y += player.velocity.y;
    //     player.velocity.y = 0;
    // }
    // if (player.position.y > 300 && offset.y < 0 && player.velocity.y > 0) {
    //     offset.y += player.velocity.y;
    //     player.velocity.y = 0;
    // }

    // debugPlayer.innerText = JSON.stringify(player);
}



const player = new Player({
    x: 107 * 32,
    y: 16 * 32,
    height: 20,
    width: 20,
});
const boss = new Boss();
const rope = new Rope();
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
boss.draw();
player.draw();
rope.draw();
flames.forEach(flame => flame.draw());
animate();

addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (player.velocity.y === 0) {
                player.velocity.y -= JUMP_SPEED;
            }
            break;
        case 'ArrowRight':
            keys.right.pressed = true;
            break;
        case 'ArrowLeft':
            keys.left.pressed = true;
            break;

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