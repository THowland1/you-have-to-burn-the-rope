import './elements/info-modal';
import './elements/button';
import './elements/button-bar';
import './elements/nav-bar';

import { ButtonBarElement } from './elements/button-bar';
import { NavBarElement } from './elements/nav-bar';

function getSingleEl<T extends Element>(tagName: string) {
  return document.getElementsByTagName(tagName)![0] as T;
}

class ElementManager {
  buttonbar = getSingleEl<ButtonBarElement>('app-button-bar');
  navbar = getSingleEl<NavBarElement>('app-nav-bar');
  volume0Button = this.navbar.volume0Button;
  volume1Button = this.navbar.volume1Button;
  showInfoButton = this.navbar.showInfoButton;
}

export const elementManager = new ElementManager();
