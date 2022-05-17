const SCALE = 1;
class Context {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.context = this.canvas.getContext('2d');
    }
    drawImage(image, ...rest) {
        if (rest.length === 4) {
            this.context.drawImage(image, ...rest.map(o => o * SCALE));
        } else if (rest.length === 8) {
            const [sx, sy, sw, sh] = rest.slice(0, 4);
            const d = rest.slice(4, 8);
            this.context.drawImage(image, sx, sy, sw, sh, ...d.map(o => o * SCALE));
        }
    }
    scale(...rest) {
        this.context.scale(...rest);
    }
    clearRect(...rest) {
        this.context.clearRect(...rest.map(o => o * SCALE));
    }
    fillRect(...rest) {
        this.context.fillRect(...rest.map(o => o * SCALE));
    }
    fillText(text, ...rest) {
        this.context.fillText(text, ...rest.map(o => o * SCALE));
    }
    setTransform(a, b, c, d, e, f) {
        this.context.setTransform(a, b, c, d, e, f);
    }
    rotate(angle) {
        this.context.rotate(angle);
    }
    save() {
        this.context.save();
    }
    restore() {
        this.context.restore();
    }

    set fillStyle(value) {
        this.context.fillStyle = value;
    }
    set font(value) {
        this.context.font = value;
    }
    set textAlign(value) {
        this.context.textAlign = value;
    }
}
const context = new Context();
export const canvas = context.canvas;
export const c = context;


export const FRAME_WIDTH = 22 * 32;
export const FRAME_HEIGHT = 16 * 32;

canvas.height = SCALE * FRAME_HEIGHT;
canvas.width = SCALE * FRAME_WIDTH;

function setSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const maxHeight = FRAME_HEIGHT;
    const maxWidth = FRAME_WIDTH;

    if (width >= maxWidth && height >= maxHeight) {
        canvas.style.height = `${maxHeight}px`;
        canvas.style.width = `${maxWidth}px`;
    } else {
        var ratio = FRAME_HEIGHT / FRAME_WIDTH;
        canvas.style.height = `${width * ratio}px`;
        canvas.style.width = `${width}px`;
    }
}

setSize();
addEventListener('resize', setSize);