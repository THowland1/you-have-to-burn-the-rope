export class Frames {
    constructor({ images, fps, loop }) {
        this.fps = fps;
        this.images = images;
        this.frameUpdated = new Date().valueOf();
        this.currentIndex = 0;
    }
    get() {
        const now = new Date().valueOf();
        if (now - this.frameUpdated > 1000 / this.fps) {
            this.frameUpdated = now;
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        }
        return this.images[this.currentIndex];
    }
}
