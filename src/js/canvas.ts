const SCALE = 1;
class Context {
  canvas = document.querySelector('canvas')!;
  context = this.canvas.getContext('2d')!;

  drawImage(
    image: CanvasImageSource,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ): void;
  drawImage(
    image: CanvasImageSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ): void;
  drawImage(
    image: CanvasImageSource,
    ...rest:
      | [number, number, number, number]
      | [number, number, number, number, number, number, number, number]
  ) {
    if (rest.length === 4) {
      const [dx, dy, dw, dh] = rest;
      this.context.drawImage(
        image,
        dx * SCALE,
        dy * SCALE,
        dw * SCALE,
        dh * SCALE
      );
    } else if (rest.length === 8) {
      const [sx, sy, sw, sh, dx, dy, dw, dh] = rest;
      this.context.drawImage(
        image,
        sx,
        sy,
        sw,
        sh,
        dx * SCALE,
        dy * SCALE,
        dw * SCALE,
        dh * SCALE
      );
    }
  }
  scale(x: number, y: number) {
    this.context.scale(x, y);
  }
  clearRect(x: number, y: number, w: number, h: number) {
    this.context.clearRect(x * SCALE, y * SCALE, w * SCALE, h * SCALE);
  }
  fillRect(x: number, y: number, w: number, h: number) {
    this.context.fillRect(x * SCALE, y * SCALE, w * SCALE, h * SCALE);
  }
  fillText(text: string, x: number, y: number) {
    this.context.fillText(text, x * SCALE, y * SCALE);
  }
  setTransform(
    a: number,
    b: number,
    c: number,
    d: number,
    e: number,
    f: number
  ) {
    this.context.setTransform(a, b, c, d, e, f);
  }
  rotate(angle: number) {
    this.context.rotate(angle);
  }
  save() {
    this.context.save();
  }
  restore() {
    this.context.restore();
  }

  set fillStyle(value: CanvasFillStrokeStyles['fillStyle']) {
    this.context.fillStyle = value;
  }
  set font(value: CanvasTextDrawingStyles['font']) {
    this.context.font = value;
  }
  set textAlign(value: CanvasTextDrawingStyles['textAlign']) {
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
  const width = window.outerWidth;
  const height = window.outerWidth;
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
