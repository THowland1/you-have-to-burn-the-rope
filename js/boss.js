

import { c } from './canvas.js';
import {
    BOSS_MAXLEFT,
    BOSS_MAXRIGHT,
    BOSS_SPEED,
    BOSS_ATTACKINTERVAL,
    BOSS_MAXMODEDURATION,
    ATTACKZONE_LEFT,
    ATTACKZONE_RIGHT,
    RAFTERS_BOTTOM
} from './consts.js';
import { Coordinates } from './coordinates.js';
import { player } from './player.js';
import { phaseManager, PHASES } from './phase-manager.js';
import { lasers } from './lasers.js';
import { timeManager } from './time-manager.js';
import { img } from './img.js';

import { ASSET_URLS } from './urls.js';

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
        /** @type{'move' | 'attack' | 'still'} */ this.mode = 'attack';
        this.facingRight = false;

        this.x = 129 * 32;
        this.y = 19 * 32;
        this.velocity = {
            x: 0,
            y: 0
        };
        this.images = {
            attack: img(ASSET_URLS['../sprites/boss-attack_204x256.png']),
            die: img(ASSET_URLS['../sprites/boss-die_192x256.png']),
            lookup: img(ASSET_URLS['../sprites/boss-lookup_192x256.png']),
            move: img(ASSET_URLS['../sprites/boss-move_204x256.png']),
            still: img(ASSET_URLS['../sprites/boss-still_204x256.png']),
        };
        this.lastAttacked = 0;
        this.recalculateModeAt = 0;
    }

    draw() {
        let img;
        this.width = 204;
        img = this.images.move;
        if (phaseManager.phase === PHASES.bossdying) {
            this.width = 192;
            img = this.images.die;
        } else if (this.mode === 'attack') {
            img = this.images.attack;
        } else if (this.mode === 'still') {
            img = this.images.still;
        } else if (this.top > player.bottom) {
            this.width = 192;
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

        if (phaseManager.phase === PHASES.bossdying) {
            return;
        }

        if (player.left > ATTACKZONE_LEFT && player.right < ATTACKZONE_RIGHT) {
            if (phaseManager.phase === PHASES.ropeburning || phaseManager.phase === PHASES.ropefalling || (player.bottom <= RAFTERS_BOTTOM && (player.left < boss.left || player.right > boss.right))) {
                this.mode = 'move';
            } else if (timeManager.now > this.recalculateModeAt) {
                this.recalculateModeAt = timeManager.now + (BOSS_MAXMODEDURATION * Math.random());
                this.mode = ['move', 'attack', 'still'][Math.floor(3 * Math.random())];
            }
        } else {
            this.mode = 'still';
        }

        this.facingRight = player.center > this.center;
        switch (this.mode) {
            case 'attack':
                if (timeManager.now > this.lastAttacked + BOSS_ATTACKINTERVAL) {

                    lasers.add({
                        left: this.facingRight ? this.right - 32 : this.left + 16,
                        top: this.top + 108
                    });
                    this.lastAttacked = timeManager.now;

                }
                break;
            case 'move':
                if (this.facingRight && this.right <= BOSS_MAXRIGHT) {
                    this.x += BOSS_SPEED;

                } else if (!this.facingRight && this.left >= BOSS_MAXLEFT) {
                    this.x -= BOSS_SPEED;

                }

        }
    }
}

export const boss = new Boss();