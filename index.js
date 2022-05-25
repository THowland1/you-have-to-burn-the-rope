

import { axes } from './js/axes.js';
import { boss } from './js/boss.js';
import { c, canvas, FRAME_HEIGHT, FRAME_WIDTH } from './js/canvas.js';
import { chandelier } from './js/chandelier.js';
import {
    COURSE_HEIGHT, COURSE_WIDTH, JUMP_SPEED, PLAYER_ATTACKINTERVAL, SHOW_GRIDLINES,
    SHOW_PLATFORMS, WALKING_SPEED, SHOW_DEBUGMENU, DEBUG_DELAY
} from './js/consts.js';
import { offset } from './js/coordinates.js';
import { debugMenu } from './js/debug-menu.js';
import { explosions } from './js/explosions.js';
import { flames } from './js/flames.js';
import { healthBar } from './js/healthbar.js';
import { lasers } from './js/lasers.js';
import { phaseManager, PHASES } from './js/phase-manager.js';
import { platforms } from './js/platforms.js';
import { player } from './js/player.js';
import { plumes } from './js/plumes.js';
import { rope } from './js/rope.js';
import { slides } from './js/slides.js';
import { timeManager } from './js/time-manager.js';
import { audioManager } from './js/audio-manager.js';
import { buttonManager } from './js/button-manager.js';
import { ASSET_URLS } from './js/urls.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register(ASSET_URLS['../serviceworker.js'], { type: 'module' })
            .then((reg) => console.log('Success: ', reg.scope))
            .catch((err) => console.log('Failure: ', err));
    });
}

document.getElementById('show-info').addEventListener('click', () => {
    document.getElementById('info').classList.remove('hidden');
});

document.getElementById('hide-info').addEventListener('click', () => {
    document.getElementById('info').classList.add('hidden');
});

document.getElementById('canvas').addEventListener('click', () => {
    phaseManager.startStartPhase();
});

class BG {
    constructor() {
        this.img = new Image();
        this.img.src = ASSET_URLS['../sprites/bg.png'];
        console.log(ASSET_URLS['../sprites/bg.png']);
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

function animate() {
    const now = new Date().valueOf();
    timeManager.msPerFrame = now - timeManager.now;
    timeManager.now = now;

    if (DEBUG_DELAY) {
        setTimeout(() => {
            requestAnimationFrame(animate);
        }, DEBUG_DELAY);

    } else {
        requestAnimationFrame(animate);
    }

    c.clearRect(0, 0, canvas.width, canvas.height);

    if (phaseManager.phase === PHASES.clicktostart) {
        c.fillStyle = 'white';

        c.textAlign = 'center';
        c.font = '500 14px Inter';

        c.fillText('Click to start', FRAME_WIDTH / 2, (FRAME_HEIGHT / 2));
        return;
    }

    if (audioManager.endCreditsMusic.currentTime < 2) {

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
        lasers.update();
        healthBar.update();

        flames.forEach(flame => flame.draw());
        canvas.style.opacity = (2 - audioManager.endCreditsMusic.currentTime) / 2;
        buttonManager.setOpacity((2 - audioManager.endCreditsMusic.currentTime) / 2);
    } else {
        canvas.style.opacity = 1;
        buttonManager.hide();
    }

    if (player.left >= 108 * 32) {
        phaseManager.startBossFightPhase();
    } else if (player.left >= 6 * 32) {
        phaseManager.startTunnelPhase();
    }

    c.fillStyle = 'white';
    slides.forEach(slide => slide.draw());

    if (player.hasFlame && player.intersects(rope.flammableBitOfRope)) {
        player.hasFlame = false;
        phaseManager.startRopeBurningPhase();
    }

    if (SHOW_PLATFORMS) {
        platforms.forEach(platform => platform.draw());
    }
    if (SHOW_DEBUGMENU) {
        debugMenu.draw();
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

    if (player.localRight > 400 && offset.x + FRAME_WIDTH < COURSE_WIDTH && player.velocity.x > 0) {
        offset.x += player.velocity.x * timeManager.msPerFrame;
    } else if (player.localLeft < 200 && offset.x > 0 && player.velocity.x < 0) {
        offset.x += player.velocity.x * timeManager.msPerFrame;
    }
    if (player.localTop < 175 && offset.y > 0 && player.velocity.y < 0) {
        offset.y += player.velocity.y * timeManager.msPerFrame;
    } else if (player.localBottom > 200 && offset.y + FRAME_HEIGHT < COURSE_HEIGHT && player.velocity.y > 0) {
        offset.y += player.velocity.y * timeManager.msPerFrame;
    }

}
animate();
