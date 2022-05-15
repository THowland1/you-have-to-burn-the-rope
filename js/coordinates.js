// export const offset = {
//     x: 0 * 32,
//     y: 0 * 32
// };
export const offset = {
    x: 124 * 32,
    y: 5 * 32
};

export class Coordinates {
    constructor({ x, y, height, width }) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    get left() { return this.x; }
    get right() { return this.left + this.width; }
    get center() { return this.left + (0.5 * this.width); }
    get yCenter() { return this.top + (0.5 * this.height); }
    get top() { return this.y; }
    get bottom() { return this.top + this.height; }

    get localLeft() { return this.x - offset.x; }
    get localRight() { return this.localLeft + this.width; }
    get localTop() { return this.y - offset.y; }
    get localBottom() { return this.localTop + this.height; }

    intersectsX({ left, right }) {
        return (this.right >= left && this.right <= right) || (this.left >= left && this.right <= right);
    }

    intersectsY({ top, bottom }) {
        return (this.bottom <= bottom && this.bottom >= top) || (this.top <= bottom && this.top >= top);
    }

    intersects({ left, right, top, bottom }) {
        return this.intersectsX({ left, right }) && this.intersectsY({ top, bottom });
    }
}