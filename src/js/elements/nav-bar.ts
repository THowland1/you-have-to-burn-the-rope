import htmlContent from 'bundle-text:./nav-bar.html';

var html = document.createElement('template');
html.innerHTML = htmlContent;

export class NavBarElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get volume0Button() {
    return this.shadowRoot!.querySelector('#volume-0')!;
  }
  get volume1Button() {
    return this.shadowRoot!.querySelector('#volume-1')!;
  }
  get showInfoButton() {
    return this.shadowRoot!.querySelector('#show-info')!;
  }

  mute() {
    this.toggleAttribute('muted', true);
  }
  unmute() {
    this.toggleAttribute('muted', false);
  }

  connectedCallback() {
    this.shadowRoot!.appendChild(html.content.cloneNode(true));
  }
}
customElements.define('app-nav-bar', NavBarElement);
