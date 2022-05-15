import { healthBar } from './healthbar.js';
import { platforms, LeftPlatform } from './platforms.js';
import { explosions } from './explosions.js';
import { c } from './canvas.js';
import { offset } from './coordinates.js';
import { chandelier } from './chandelier.js';
import { rope } from './rope.js';
import { audio } from './audio.js';
import { VOLUME } from './consts.js';

function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}

async function wait(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

export const PHASES = {
    start: 0,
    tunnel: 1,
    bossfight: 2,
    ropeburning: 3,
    ropefalling: 4,
    bossdying: 5,
    end: 6
};
class PhaseManager {
    constructor() {
        this.tunnelMusic = new Audio('./sounds/tunnel.mp3');
        this.tunnelMusic.loop = true;
        this.tunnelMusic.volume = VOLUME;
        this.bossFightMusic = new Audio('./sounds/boss-fight.mp3');
        this.bossFightMusic.loop = true;
        this.bossFightMusic.volume = VOLUME;
        this.backDoorImage = img('./sprites/back-door_32x64.png');
        this.showBackDoor = false;
        this.phase = PHASES.start;
    }
    startTunnelPhase() {
        if (this.phase >= PHASES.tunnel) {
            return;
        }
        this.tunnelMusic.play();
        this.phase = PHASES.tunnel;
    }
    startBossFightPhase() {
        if (this.phase >= PHASES.bossfight) {
            return;
        }
        this.tunnelMusic.pause();
        this.bossFightMusic.play();
        this.showBackDoor = true;
        healthBar.show = true;
        platforms.push(new LeftPlatform({ right: 108 * 32, bottom: 27 * 32, top: 25 * 32 }));
        explosions.add({ left: (107 * 32) - 2, top: (25 * 32) - 2 });
        explosions.add({ left: (107 * 32) - 2, top: (26 * 32) - 2 });
        this.phase = PHASES.bossfight;
    }
    async startRopeBurningPhase() {
        if (this.phase >= PHASES.ropeburning) {
            return;
        }
        this.bossFightMusic.pause();
        this.phase = PHASES.ropeburning;

        explosions.add({ left: 132 * 32, top: 6 * 32 });
        await wait(200);
        explosions.add({ left: 132 * 32, top: 7 * 32 });
        await wait(200);
        explosions.add({ left: 132 * 32, top: 8 * 32 });
        await wait(200);
        explosions.add({ left: 132 * 32, top: 9 * 32 });
        await wait(200);
        explosions.add({ left: 132 * 32, top: 10 * 32 });
        this.startRopeFallingPhase();
    }
    async startRopeFallingPhase() {
        if (this.phase >= PHASES.ropefalling) {
            return;
        }
        this.phase = PHASES.ropefalling;

        chandelier.dropped = true;
        await wait(1200);
        this.startBossDyingPhase();

    }

    async startBossDyingPhase() {
        if (this.phase >= PHASES.bossdying) {
            return;
        }
        this.phase = PHASES.bossdying;
        healthBar.die();
        chandelier.show = false;
        rope.show = false;
        // #region Explosions
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
        // #endregion
        this.startEndPhase();


    }
    async startEndPhase() {
        if (this.phase >= PHASES.end) {
            return;
        }
        this.phase = PHASES.end;
        // #region Explosions
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
        // #endregion
        await wait(2000);
        audio.play();
    }
    drawBackDoor() {
        c.drawImage(this.backDoorImage, 107 * 32 - offset.x, 25 * 32 - offset.y, 32, 64);
    }
}

export const phaseManager = new PhaseManager();