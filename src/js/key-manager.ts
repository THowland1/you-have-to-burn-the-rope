import { audioManager } from './audio-manager';
import { JUMP_SPEED, PLAYER_ATTACKINTERVAL } from './consts';
import { ButtonBarElement } from './elements/button-bar';
import { phaseManager, PHASES } from './phase-manager';
import { player } from './player';
import { timeManager } from './time-manager';

class KeyManager {
  keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
    jump: {
      pressed: false,
    },
    attack: {
      pressed: false,
    },
  };
  constructor() {
    const jump = () => {
      if (!player.stunned && player.velocity.y === 0) {
        player.velocity.y -= JUMP_SPEED;
        audioManager.playJumpSound();
      }
    };
    const startRight = () => {
      if (!player.stunned) {
        this.keys.right.pressed = true;
        player.facingRight = true;
      }
    };
    const stopRight = () => (this.keys.right.pressed = false);
    const startLeft = () => {
      if (!player.stunned) {
        this.keys.left.pressed = true;
        player.facingRight = false;
      }
    };
    const stopLeft = () => (this.keys.left.pressed = false);
    const attack = () => {
      if (
        !player.stunned &&
        timeManager.now > player.lastAttack + PLAYER_ATTACKINTERVAL
      ) {
        player.attack();
      }
    };
    addEventListener('keydown', (e) => {
      if (phaseManager.phase >= PHASES.ropeburning) {
        return;
      }
      const fn = {
        ' ': jump,
        ArrowUp: jump,
        ArrowRight: startRight,
        ArrowLeft: startLeft,
      }[e.key];
      (fn ?? attack)();
    });
    addEventListener('keyup', (e) => {
      const fn = {
        ArrowRight: stopRight,
        ArrowLeft: stopLeft,
      }[e.key];
      fn?.();
    });

    const touch = matchMedia('(hover: none)').matches;
    if (touch) {
      const buttonsDiv = document.getElementsByTagName(
        'app-button-bar'
      )![0] as ButtonBarElement;

      const rightBtn = buttonsDiv.rightButton;
      rightBtn.addEventListener('touchstart', startRight);
      rightBtn.addEventListener('touchend', stopRight);

      const leftBtn = buttonsDiv.leftButton;
      leftBtn.addEventListener('touchstart', startLeft);
      leftBtn.addEventListener('touchend', stopLeft);

      const jumpBtn = buttonsDiv.jumpButton;
      jumpBtn.addEventListener('touchstart', jump);

      const attackBtn = buttonsDiv.attackButton;
      attackBtn.addEventListener('touchstart', attack);
    }
  }
}
export const keyManager = new KeyManager();
