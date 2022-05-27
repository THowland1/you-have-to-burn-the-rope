import htmlContent from 'bundle-text:./button-bar.html';

var html = document.createElement('template');
html.innerHTML = htmlContent;

export class ButtonBarElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  get jumpButton() {
    return this.shadowRoot!.querySelector('#jump')!;
  }
  get attackButton() {
    return this.shadowRoot!.querySelector('#attack')!;
  }
  get leftButton() {
    return this.shadowRoot!.querySelector('#left')!;
  }
  get rightButton() {
    return this.shadowRoot!.querySelector('#right')!;
  }

  show() {
    this.toggleAttribute('show', true);
  }
  hide() {
    this.toggleAttribute('show', false);
  }

  connectedCallback() {
    this.shadowRoot!.appendChild(html.content.cloneNode(true));
  }
}
customElements.define('app-button-bar', ButtonBarElement);
