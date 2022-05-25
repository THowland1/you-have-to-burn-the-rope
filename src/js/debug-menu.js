import { c, FRAME_WIDTH } from './canvas.js';
import { timeManager } from './time-manager';
import { player } from './player.js';

class DebugMenu {
    constructor() {
    }
    draw() {
        c.fillStyle = '#000c';
        c.fillRect(0, 0, 200, 200);
        c.fillStyle = '#bbb';
        c.textAlign = 'left';
        c.font = 'bold 14px Inter';
        c.fillText('ms per frame', 58, 48);
        c.textAlign = 'right';
        c.fillStyle = 'white';
        c.fillText(timeManager.msPerFrame, 28, 48);


        c.fillStyle = '#bbb';
        c.textAlign = 'left';
        c.font = 'bold 14px Inter';
        c.fillText(player.velocity.y, 58, 68);
    }
}


export const debugMenu = new DebugMenu();