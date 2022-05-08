

import { audio } from './js/audio.js';
import { axes } from './js/axes.js';
import { boss } from './js/boss.js';
import { c, canvas, FRAME_HEIGHT, FRAME_WIDTH } from './js/canvas.js';
import { chandelier } from './js/chandelier.js';
import {
    COURSE_HEIGHT, COURSE_WIDTH, JUMP_SPEED, SHOW_GRIDLINES,
    SHOW_PLATFORMS, speed
} from './js/consts.js';
import { offset } from './js/coordinates.js';
import { explosions } from './js/explosions.js';
import { flames } from './js/flames.js';
import { healthBar } from './js/healthbar.js';
import { phaseManager } from './js/phase-manager.js';
import { platforms } from './js/platforms.js';
import { player } from './js/player.js';
import { plumes } from './js/plumes.js';
import { rope } from './js/rope.js';
import { slides } from './js/slides.js';
import { timeManager } from './js/time-manager.js';

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    jump: {
        pressed: false
    },
    attack: {
        pressed: false
    }
};


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

addEventListener('keydown', e => {
    switch (e.key) {
        case ' ':
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
            break;
        default:
            keys.left.attack = false;
            player.attack();
            break;
    }
});
addEventListener('keyup', e => {
    switch (e.key) {
        case ' ':
        case 'ArrowUp':
            break;
        case 'ArrowRight':
            keys.right.pressed = false;
            break;
        case 'ArrowLeft':
            keys.left.pressed = false;
            break;
        default:
            keys.left.attack = false;
            break;
    }
});
function animate() {
    timeManager.now = new Date().valueOf();
    requestAnimationFrame(animate);

    c.clearRect(0, 0, canvas.width, canvas.height);
    if (audio.currentTime < 2) {

        bg.draw();
        if (phaseManager.showBackDoor) {
            phaseManager.drawBackDoor();
        }

        boss.update();
        player.update();
        rope.update();
        chandelier.update();
        explosions.update();
        plumes.update();
        axes.update();
        healthBar.update();

        flames.forEach(flame => flame.draw());
        canvas.style.opacity = (2 - audio.currentTime) / 2;
    } else {
        canvas.style.opacity = 1;
    }

    if (player.left >= 108 * 32) {
        phaseManager.startBossFightPhase();
    } else if (player.left >= 6 * 32) {
        phaseManager.startTunnelPhase();
    }

    // c.drawImage(creditsBg, 0, 0, FRAME_WIDTH, FRAME_HEIGHT);
    c.fillStyle = 'white';
    slides.forEach(slide => slide.draw());

    if (player.hasFlame && player.intersects(rope)) {
        player.hasFlame = false;
        phaseManager.startRopeBurningPhase();
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
        if (player.right > platform.left && player.left < platform.right) {
            if (player.bottom <= platform.top &&
                player.bottom + player.velocity.y >= platform.top
            ) {
                player.y = platform.y - player.height;
                if (player.velocity.y > 20) {
                    player.land();
                }
                player.velocity.y = 0;

            }
            if (player.top >= platform.bottom &&
                player.top + player.velocity.y <= platform.bottom
            ) {
                player.y = platform.bottom;
                player.velocity.y = 0;
            }
        }

        if (player.bottom > platform.top && player.top < platform.bottom) {
            if (player.right <= platform.left &&
                player.right + player.velocity.x >= platform.left
            ) {
                player.x = platform.left - player.width;
                player.velocity.x = 0;
            }
            if (player.left >= platform.right &&
                player.left + player.velocity.x <= platform.right
            ) {
                player.x = platform.right;
                player.velocity.x = 0;
            }
        }
    });
}
animate();
