import htmlContent from 'bundle-text:./info-modal.html';

var html = document.createElement('template');
html.innerHTML = htmlContent;

class InfoModalElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  _render() {}

  get hideInfoButton() {
    return this.shadowRoot!.querySelector('#hide-info')!;
  }

  connectedCallback() {
    this.shadowRoot!.appendChild(html.content.cloneNode(true));
    this.hideInfoButton.addEventListener('click', (_) => {
      this.removeAttribute('open');
    });
    console.log();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {}

  static get observedAttributes() {
    return ['open'];
  }
}
customElements.define('app-info-modal', InfoModalElement);
