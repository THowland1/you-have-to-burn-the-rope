class ButtonManager {
    constructor() {
        this.buttons = document.getElementById('buttons');
    }
    show() {
        this.buttons.classList.remove('hidden');
    }
    hide() {
        this.buttons.classList.add('hidden');
    }
    setOpacity(value) {
        this.buttons.style.opacity = value;
    }

}

export const buttonManager = new ButtonManager();