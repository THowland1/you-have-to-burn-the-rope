const canvas = document.querySelector('canvas');
const debugPlayer = document.querySelector('#debug-player');
const debugOffset = document.querySelector('#debug-offset');
const c = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;
const gravity = 1;
const speed = 5;
const offset = {
    x: 0,
    y: 50
};

class Player {
    constructor() {
        this.globalPosition = {
            x: 144,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 20;
        this.height = 20;
    }

    get left() { return this.globalPosition.x; }
    get right() { return this.left + this.width; }
    get top() { return this.globalPosition.y; }
    get bottom() { return this.top + this.height; }

    get localLeft() { return this.globalPosition.x - offset.x; }
    get localRight() { return this.localLeft + this.width; }
    get localTop() { return this.globalPosition.y - offset.y; }
    get localBottom() { return this.localTop + this.height; }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.localLeft, this.localTop, this.width, this.height);
    }
    update() {
        this.draw();
        this.globalPosition.x += this.velocity.x;
        this.globalPosition.y += this.velocity.y;

        if (this.globalPosition.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}
class Platform {
    constructor({ x, y, width, height }) {
        this.globalPosition = {
            x,
            y
        };
        this.width = width;
        this.height = height;
    }
    get left() { return this.globalPosition.x; }
    get right() { return this.left + this.width; }
    get top() { return this.globalPosition.y; }
    get bottom() { return this.top + this.height; }

    get localLeft() { return this.globalPosition.x - offset.x; }
    get localRight() { return this.localLeft + this.width; }
    get localTop() { return this.globalPosition.y - offset.y; }
    get localBottom() { return this.localTop + this.height; }
    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.localLeft, this.localTop, this.width, this.height);
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

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach(platform => platform.draw());

    // # Update velocity for next frame

    if (keys.right.pressed) {
        player.velocity.x = speed;
    } else if (keys.left.pressed) {
        player.velocity.x = -speed;
    } else {
        player.velocity.x = 0;
    }

    if (player.localRight > 400 && player.velocity.x > 0) {
        offset.x += player.velocity.x;
    } else if (player.localLeft < 100 && player.velocity.x < 0) {
        offset.x += player.velocity.x;
    }
    if (player.localTop < 100 && player.velocity.y < 0) {
        offset.y += player.velocity.y;
    } else if (player.localBottom > 300 && player.velocity.y > 0) {
        offset.y += player.velocity.y;
    }

    platforms.forEach(platform => {
        if (player.bottom <= platform.top &&
            player.bottom + player.velocity.y >= platform.top &&
            player.right >= platform.left &&
            player.left <= platform.right
        ) {
            player.velocity.y = 0;
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



const player = new Player();
const platforms = [
    new Platform({ x: 200, y: 200, width: 200, height: 200 }),
    new Platform({ x: 500, y: 100, width: 200, height: 20 }),
    new Platform({ x: 0, y: 300, width: 600, height: 32 }),
    new Platform({ x: 96, y: 0, width: 32, height: 400 }),
];
player.draw();
animate();

addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (player.velocity.y === 0) {
                player.velocity.y -= 20;
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