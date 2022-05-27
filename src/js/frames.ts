interface IFrames {
  fps: number;
  images: HTMLImageElement[];
}
export class Frames {
  frameUpdated = new Date().valueOf();
  currentIndex = 0;
  fps: number;
  images: HTMLImageElement[];

  constructor({ images, fps }: IFrames) {
    this.fps = fps;
    this.images = images;
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
