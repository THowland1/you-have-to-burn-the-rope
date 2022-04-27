const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 600;
canvas.height = 400;
const gravity = 1;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.width = 20;
        this.height = 20;
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}
class Platform {
    constructor({ x, y, width, height }) {
        this.position = {
            x,
            y
        };
        this.width = width;
        this.height = height;
    }
    draw() {
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
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

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    } else if (keys.left.pressed && player.position.x > 100) {
        player.velocity.x = -5;
    } else {
        player.velocity.x = 0;

        if (keys.right.pressed) {
            platforms.forEach(platform => platform.position.x -= 5);
        } else if (keys.left.pressed) {
            platforms.forEach(platform => platform.position.x += 5);
        }
    }

    platforms.forEach(platform => {
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0;
        }
        if (player.position.x + player.width <= platform.position.x &&
            player.position.x + player.width + player.velocity.x >= platform.position.x &&
            player.position.y + player.height >= platform.position.y &&
            player.position.y <= platform.position.y + platform.height
        ) {
            player.velocity.x = 0;
        }
        if (player.position.x >= platform.position.x + platform.width &&
            player.position.x + player.velocity.x <= platform.position.x + platform.width &&
            player.position.y + player.height >= platform.position.y &&
            player.position.y <= platform.position.y + platform.height
        ) {
            player.velocity.x = 0;
        }
    });
}



const player = new Player();
const platforms = [new Platform({ x: 200, y: 200, width: 200, height: 200 }), new Platform({ x: 500, y: 100, width: 200, height: 20 })];
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