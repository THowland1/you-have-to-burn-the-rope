

import { c } from './canvas.js';
import {
    BOSS_MAXLEFT,
    BOSS_MAXRIGHT, BOSS_SPEED
} from './consts.js';
import { Coordinates } from './coordinates.js';
import { player } from './player.js';
import { phaseManager, PHASES } from './phase-manager.js';

function img(src) {
    const result = new Image();
    result.src = src;
    return result;
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
        if (phaseManager.phase === PHASES.bossdying) {
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
        if (phaseManager.phase === PHASES.end) {
            return;
        }
        this.draw();

        if (phaseManager.phase === PHASES.bossdying || phaseManager.phase === PHASES.ropefalling) {
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

export const boss = new Boss();