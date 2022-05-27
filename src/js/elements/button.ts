import htmlContent from 'bundle-text:./button.html';

var html = document.createElement('template');
html.innerHTML = htmlContent;

class ButtonElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  _render() {}

  connectedCallback() {
    this.shadowRoot!.appendChild(html.content.cloneNode(true));
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {}

  static get observedAttributes() {
    return ['open'];
  }
}
customElements.define('app-button', ButtonElement);
