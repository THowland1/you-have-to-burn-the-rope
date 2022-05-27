class ButtonManager {
  buttons = document.getElementById('buttons')!;
  show() {
    this.buttons.classList.remove('hidden');
  }
  hide() {
    this.buttons.classList.add('hidden');
  }
  setOpacity(value: number) {
    this.buttons.style.opacity = String(value);
  }
}

export const buttonManager = new ButtonManager();
