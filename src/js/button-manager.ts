import { audioManager } from './audio-manager';
import { elementManager } from './element-manager';
import { ButtonBarElement } from './elements/button-bar';
import { NavBarElement } from './elements/nav-bar';

class ButtonManager {
  volume0Button = elementManager.navbar.volume0Button;
  volume1Button = elementManager.navbar.volume1Button;
  showInfoButton = elementManager.navbar.showInfoButton;

  constructor() {
    this.volume0Button.addEventListener('click', () =>
      audioManager.setVolume(0)
    );
    this.volume1Button.addEventListener('click', () =>
      audioManager.setVolume(1)
    );

    this.showInfoButton.addEventListener('click', () => {
      document
        .getElementsByTagName('app-info-modal')![0]
        .toggleAttribute('open');
    });
  }

  show() {
    elementManager.buttonbar.show();
  }
  hide() {
    elementManager.buttonbar.hide();
  }
  setOpacity(value: number) {
    elementManager.buttonbar.style.opacity = String(value);
  }
}

export const buttonManager = new ButtonManager();
