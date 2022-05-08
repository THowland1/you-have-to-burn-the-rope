import { Coordinates } from './coordinates.js';
import { c } from './canvas.js';



class Platform extends Coordinates {
    constructor({ left, top, right, bottom }) {
        super({ x: left, y: top, width: right - left, height: bottom - top });
    }

    draw() {
        c.fillStyle = '#00f3';
        c.fillRect(this.localLeft, this.localTop, this.width, this.height);
    }
}





export class LeftPlatform extends Platform {
    constructor({ top, right, bottom }) {
        super({ left: right - 32, top, right, bottom });
    }
}
class RightPlatform extends Platform {
    constructor({ left, top, bottom }) {
        super({ left, top, right: left + 32, bottom });
    }
}
class BottomPlatform extends Platform {
    constructor({ left, top, right }) {
        super({ left, top, right, bottom: top + 32 });
    }
}
class TopPlatform extends Platform {
    constructor({ left, right, bottom }) {
        super({ left, top: bottom - 32, right, bottom });
    }
}

export const platforms = [
    // Tunnel
    new RightPlatform({ left: 6 * 32, top: 0 * 32, bottom: 15 * 32 }), // right
    new LeftPlatform({ top: 0 * 32, right: 4 * 32, bottom: 18 * 32 }), // left
    new TopPlatform({ left: 6 * 32, right: 48 * 32, bottom: 15 * 32 }), // top: ;
    new BottomPlatform({ left: 3 * 32, top: 17 * 32, right: 51 * 32 }), // bottom

    new RightPlatform({ left: 50 * 32, top: 13 * 32, bottom: 18 * 32 }), // right
    new LeftPlatform({ top: 10 * 32, right: 48 * 32, bottom: 15 * 32 }), // left
    new TopPlatform({ left: 47 * 32, right: 63 * 32, bottom: 11 * 32 }), // top
    new BottomPlatform({ left: 50 * 32, top: 13 * 32, right: 60 * 32 }), // bottom

    new RightPlatform({ left: 62 * 32, top: 10 * 32, bottom: 15 * 32 }), // right
    new LeftPlatform({ top: 13 * 32, right: 60 * 32, bottom: 18 * 32 }), // left
    new TopPlatform({ left: 62 * 32, right: 84 * 32, bottom: 15 * 32 }), // top
    new BottomPlatform({ left: 59 * 32, top: 17 * 32, right: 81 * 32 }), // bottom

    new RightPlatform({ left: 83 * 32, top: 14 * 32, bottom: 20 * 32 }), // right
    new LeftPlatform({ top: 17 * 32, right: 81 * 32, bottom: 23 * 32 }), // left
    new TopPlatform({ left: 83 * 32, right: 92 * 32, bottom: 20 * 32 }), // top
    new BottomPlatform({ left: 80 * 32, top: 22 * 32, right: 89 * 32 }), // bottom

    new RightPlatform({ left: 91 * 32, top: 19 * 32, bottom: 25 * 32 }), // right
    new LeftPlatform({ top: 22 * 32, right: 89 * 32, bottom: 28 * 32 }), // left
    new TopPlatform({ left: 91 * 32, right: 109 * 32, bottom: 25 * 32 }), // top
    new BottomPlatform({ left: 88 * 32, top: 27 * 32, right: 158 * 32 }), // bottom

    // Left wall
    new LeftPlatform({ top: 5 * 32, right: 108 * 32, bottom: 24 * 32 }), // left
    new RightPlatform({ left: 113 * 32, top: 12 * 32, bottom: 19 * 32 }), // right

    new RightPlatform({ top: 22 * 32, left: 113 * 32, bottom: 25 * 32 }), // left: ;
    new Platform({ left: 113 * 32, top: 24 * 32, right: 117 * 32, bottom: 25 * 32 }), // top
    new Platform({ left: 110 * 32, top: 21 * 32, right: 111 * 32, bottom: 22 * 32 }), // top, left, bottom
    new Platform({ left: 111 * 32, top: 20 * 32, right: 112 * 32, bottom: 21 * 32 }), // top, left
    new Platform({ left: 112 * 32, top: 19 * 32, right: 113 * 32, bottom: 20 * 32 }), // top, left

    new Platform({ left: 110 * 32, top: 16 * 32, right: 111 * 32, bottom: 17 * 32 }), // top, right, bottom
    new Platform({ left: 109 * 32, top: 15 * 32, right: 110 * 32, bottom: 16 * 32 }), // top, right
    new Platform({ left: 108 * 32, top: 14 * 32, right: 109 * 32, bottom: 15 * 32 }), // top, right

    new Platform({ left: 110 * 32, top: 11 * 32, right: 111 * 32, bottom: 12 * 32 }), // top, left, bottom
    new Platform({ left: 111 * 32, top: 10 * 32, right: 112 * 32, bottom: 11 * 32 }), // top, left
    new Platform({ left: 112 * 32, top: 9 * 32, right: 113 * 32, bottom: 10 * 32 }), // top, left

    new Platform({ left: 112 * 32, top: 9 * 32, right: 115 * 32, bottom: 10 * 32 }), // bottom, left
    new Platform({ left: 107 * 32, top: 5 * 32, right: 115 * 32, bottom: 6 * 32 }), // bottom, left
    new Platform({ left: 110 * 32, top: 11 * 32, right: 114 * 32, bottom: 12 * 32 }), // bottom, left
    new Platform({ left: 108 * 32, top: 16 * 32, right: 111 * 32, bottom: 17 * 32 }), // bottom, right
    new Platform({ left: 110 * 32, top: 21 * 32, right: 113 * 32, bottom: 22 * 32 }), // bottom, left

    // Right wall
    new TopPlatform({ left: 148 * 32, right: 152 * 32, bottom: 25 * 32 }), // top
    new RightPlatform({ left: 148 * 32, top: 24 * 32, bottom: 25 * 32 }), // right
    new BottomPlatform({ left: 148 * 32, top: 24 * 32, right: 150 * 32 }), // bottom

    new RightPlatform({ left: 154 * 32, top: 26 * 32, bottom: 27 * 32 }), // right
    new RightPlatform({ left: 155 * 32, top: 25 * 32, bottom: 26 * 32 }), // right
    new RightPlatform({ left: 156 * 32, top: 24 * 32, bottom: 25 * 32 }), // right
    new RightPlatform({ left: 157 * 32, top: 17 * 32, bottom: 24 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 26 * 32 }), // right
    new BottomPlatform({ left: 155 * 32, right: 156 * 32, top: 25 * 32 }), // right
    new BottomPlatform({ left: 156 * 32, right: 157 * 32, top: 24 * 32 }), // right
    new LeftPlatform({ right: 152 * 32, top: 22 * 32, bottom: 25 * 32 }), // right

    new TopPlatform({ left: 152 * 32, right: 155 * 32, bottom: 22 * 32 }), // top
    new LeftPlatform({ right: 155 * 32, top: 21 * 32, bottom: 22 * 32 }), // right
    new LeftPlatform({ right: 154 * 32, top: 20 * 32, bottom: 21 * 32 }), // right
    new LeftPlatform({ right: 153 * 32, top: 19 * 32, bottom: 20 * 32 }), // right
    new BottomPlatform({ left: 152 * 32, right: 153 * 32, top: 19 * 32 }), // right
    new BottomPlatform({ left: 153 * 32, right: 154 * 32, top: 20 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 21 * 32 }), // right
    new LeftPlatform({ right: 152 * 32, top: 12 * 32, bottom: 19 * 32 }), // right

    new RightPlatform({ left: 154 * 32, top: 16 * 32, bottom: 17 * 32 }), // right
    new RightPlatform({ left: 155 * 32, top: 15 * 32, bottom: 16 * 32 }), // right
    new RightPlatform({ left: 156 * 32, top: 14 * 32, bottom: 15 * 32 }), // right
    new RightPlatform({ left: 157 * 32, top: 6 * 32, bottom: 14 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 16 * 32 }), // right
    new BottomPlatform({ left: 155 * 32, right: 156 * 32, top: 15 * 32 }), // right
    new BottomPlatform({ left: 156 * 32, right: 157 * 32, top: 14 * 32 }), // right
    new TopPlatform({ left: 154 * 32, right: 157 * 32, bottom: 17 * 32 }), // top

    new TopPlatform({ left: 152 * 32, right: 155 * 32, bottom: 12 * 32 }), // top
    new LeftPlatform({ right: 155 * 32, top: 11 * 32, bottom: 12 * 32 }), // right
    new LeftPlatform({ right: 154 * 32, top: 10 * 32, bottom: 11 * 32 }), // right
    new LeftPlatform({ right: 153 * 32, top: 9 * 32, bottom: 10 * 32 }), // right
    new BottomPlatform({ left: 150 * 32, right: 153 * 32, top: 9 * 32 }), // right
    new BottomPlatform({ left: 153 * 32, right: 154 * 32, top: 10 * 32 }), // right
    new BottomPlatform({ left: 154 * 32, right: 155 * 32, top: 11 * 32 }), // right

    // Ceiling
    new Platform({ left: 115 * 32, top: 10 * 32, right: 117 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 119 * 32, top: 10 * 32, right: 121 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 123 * 32, top: 10 * 32, right: 125 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 127 * 32, top: 10 * 32, right: 129 * 32, bottom: 11 * 32 }), // bottom

    new Platform({ left: 136 * 32, top: 10 * 32, right: 138 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 140 * 32, top: 10 * 32, right: 142 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 144 * 32, top: 10 * 32, right: 146 * 32, bottom: 11 * 32 }), // bottom
    new Platform({ left: 148 * 32, top: 10 * 32, right: 150 * 32, bottom: 11 * 32 }), // bottom

    new TopPlatform({ left: 150 * 32, right: 157 * 32, bottom: 6 * 32 }), // top
    new TopPlatform({ left: 115 * 32, right: 150 * 32, bottom: 5 * 32 }), // top
    new TopPlatform({ left: 132 * 32, right: 133 * 32, bottom: 6 * 32 }), // top
    new LeftPlatform({ right: 133 * 32, top: 5 * 32, bottom: 6 * 32 }), // right
    new RightPlatform({ left: 132 * 32, top: 5 * 32, bottom: 6 * 32 }), // right

    // Atrium
    new LeftPlatform({ right: 115 * 32, top: 11 * 32, bottom: 24 * 32 }), // right
    new Platform({ left: 118 * 32, top: 20 * 32, right: 120 * 32, bottom: 21 * 32 }),
    new Platform({ left: 122 * 32, top: 17 * 32, right: 124 * 32, bottom: 18 * 32 }),
    new Platform({ left: 128 * 32, top: 16 * 32, right: 130 * 32, bottom: 17 * 32 }),
    new Platform({ left: 135 * 32, top: 16 * 32, right: 137 * 32, bottom: 17 * 32 }),
    new Platform({ left: 141 * 32, top: 17 * 32, right: 143 * 32, bottom: 18 * 32 }),
    new Platform({ left: 145 * 32, top: 20 * 32, right: 147 * 32, bottom: 21 * 32 }),
    new RightPlatform({ left: 150 * 32, top: 11 * 32, bottom: 24 * 32 }), // right

];
