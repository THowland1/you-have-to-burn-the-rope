
import { audio } from './audio.js';
import { FRAME_HEIGHT, FRAME_WIDTH, c, canvas } from './canvas.js';

function img(src) {
    const result = new Image();
    result.src = src;
    return result;
}

class TitleSlide {
    constructor({ timeIn, timeOut, fadeTime }) {
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = audio.currentTime;
        if (time < this.timeIn || time > this.timeOut) {
            return;
        }
        if (time - this.timeIn < this.fadeTime) {
            canvas.style.opacity = ((time - this.timeIn) / this.fadeTime);
        } else if (this.timeOut - time < this.fadeTime) {
            canvas.style.opacity = (this.timeOut - time) / this.fadeTime;
        }
        c.textAlign = 'center';
        c.font = '500 14px Inter';
        c.fillText('You Have To Burn The Rope', FRAME_WIDTH / 2, (FRAME_HEIGHT / 2) - 10);
        c.font = '400 12px Inter';
        c.fillText('Thank you for playing!', FRAME_WIDTH / 2, (FRAME_HEIGHT / 2) + 10);
    }
}
class GameOverSlide {
    constructor({ timeIn, fadeTime, text }) {
        this.timeIn = timeIn;
        this.fadeTime = fadeTime;
        this.text = text;
    }
    draw() {
        const time = audio.currentTime;
        if (time < this.timeIn) {
            return;
        }
        if (time - this.timeIn < this.fadeTime) {
            canvas.style.opacity = ((time - this.timeIn) / this.fadeTime);
        }
        // if (!audio.ended) {
        //     const fadeTime = audio.duration - this.timeIn;
        //     canvas.style.opacity = ((time - this.timeIn) / fadeTime);
        // }
        c.textAlign = 'center';
        c.font = '500 14px Inter';
        c.fillText(this.text, FRAME_WIDTH / 2, (FRAME_HEIGHT / 2));
    }
}
class LyricSlide {
    constructor({ timeIn, timeOut, text }) {
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.text = text;
    }
    draw() {
        const time = audio.currentTime;
        if (time < this.timeIn || time > this.timeOut) {
            return;
        }
        c.textAlign = 'center';
        c.font = '500 14px Inter';
        c.fillText(this.text, FRAME_WIDTH / 2, (FRAME_HEIGHT / 2));
    }
}


class ImageTextSlide {
    constructor({ heading, lines, src, timeIn, timeOut, fadeTime }) {
        this.img = img(src);
        /** @type {string} */ this.heading = heading;
        /** @type {string[]} */ this.lines = lines;
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
    }
    draw() {
        const time = audio.currentTime;
        if (time < this.timeIn || time > this.timeOut) {
            return;
        }
        if (time - this.timeIn < this.fadeTime) {
            canvas.style.opacity = ((time - this.timeIn) / this.fadeTime);
        } else if (this.timeOut - time < this.fadeTime) {
            canvas.style.opacity = (this.timeOut - time) / this.fadeTime;
        }
        let offsetX = 150;
        const offsetY = 0;
        c.drawImage(this.img, (FRAME_WIDTH / 2) - 250, (FRAME_HEIGHT - 200) / 2, 200, 200);
        c.textAlign = 'center';
        c.font = '500 14px Inter';
        c.fillText(this.heading, offsetX + (FRAME_WIDTH / 2), offsetY + (FRAME_HEIGHT / 2) - 10);
        c.font = '400 12px Inter';
        this.lines.forEach((line, i) => {
            c.fillText(line, offsetX + (FRAME_WIDTH / 2), offsetY + (FRAME_HEIGHT / 2) + 5 + (15 * i));
        });

    }
}
class TextImageSlide {
    constructor({ heading, lines, src, timeIn, timeOut, fadeTime }) {
        this.img = img(src);
        this.timeIn = timeIn;
        this.timeOut = timeOut;
        this.fadeTime = fadeTime;
        /** @type {string} */ this.heading = heading;
        /** @type {string[]} */ this.lines = lines;
    }
    draw() {
        const time = audio.currentTime;
        if (time < this.timeIn || time > this.timeOut) {
            return;
        }
        if (time - this.timeIn < this.fadeTime) {
            canvas.style.opacity = ((time - this.timeIn) / this.fadeTime);
        } else if (this.timeOut - time < this.fadeTime) {
            canvas.style.opacity = (this.timeOut - time) / this.fadeTime;
        }
        let offsetX = -150;
        c.drawImage(this.img, (FRAME_WIDTH / 2) + 50, (FRAME_HEIGHT - 200) / 2, 200, 200);
        c.textAlign = 'center';
        c.font = '500 14px Inter';
        c.fillText(this.heading, offsetX + (FRAME_WIDTH / 2), (FRAME_HEIGHT / 2) - 10);
        c.font = '400 12px Inter';
        this.lines.forEach((line, i) => {
            c.fillText(line, offsetX + (FRAME_WIDTH / 2), (FRAME_HEIGHT / 2) + 5 + (15 * i));
        });
    }
}

// You Have To 
// Design, Code, Graphics Kian Bashiri (mazapan.se)
const slides = [
    new TitleSlide({ timeIn: 3.158386, timeOut: 10.540059, fadeTime: .45 }),
    new ImageTextSlide({ heading: 'Design, Code, Graphics', lines: ['Kian Bashiri', '(mazapan.se)'], src: './sprites/credits-1_200x200.png', timeIn: 11.89449, timeOut: 19.374947, fadeTime: .45 }),
    new TextImageSlide({ heading: 'Music', lines: ['Henrik Nåmark', '(reachground.se)'], src: './sprites/credits-2_200x200.png', timeIn: 20.633224, timeOut: 28.119119, fadeTime: .45 }),
    new ImageTextSlide({ heading: 'Additional Design', lines: ['Henrik Nåmark', 'Christian Dryden'], src: './sprites/credits-3_200x200.png', timeIn: 29.364552, timeOut: 36.967399, fadeTime: .45 }),
    new TextImageSlide({ heading: 'Special thanks to', lines: ['Umami'], src: './sprites/credits-4_200x200.png', timeIn: 38.17481, timeOut: 45.787413, fadeTime: .45 }),

    new LyricSlide({ timeIn: 52.289314, timeOut: 53.952062, text: 'Now you\'re a hero' }),
    new LyricSlide({ timeIn: 53.952062, timeOut: 55.10938, text: 'You managed to' }),
    new LyricSlide({ timeIn: 55.10938, timeOut: 58.198456, text: 'beat the whole damn ga-ame' }),
    new LyricSlide({ timeIn: 59.330643, timeOut: 61.15019, text: 'We\'re happy you made it' }),
    new LyricSlide({ timeIn: 61.350186, timeOut: 63.122842, text: 'But how are you gonna spend' }),
    new LyricSlide({ timeIn: 63.122842, timeOut: 65.466856, text: 'the rest of this da-ay' }),
    new LyricSlide({ timeIn: 67.011187, timeOut: 70.684104, text: 'Maybe watch a video' }),
    new LyricSlide({ timeIn: 70.684104, timeOut: 72.576486, text: 'Maybe press refresh' }),
    new LyricSlide({ timeIn: 72.576486, timeOut: 73.537913, text: 'and start again' }),

    new LyricSlide({ timeIn: 74.415235, timeOut: 76.077983, text: 'Now you\'re a hero' }),
    new LyricSlide({ timeIn: 76.077983, timeOut: 77.235301, text: 'You managed to' }),
    new LyricSlide({ timeIn: 77.235301, timeOut: 80.324377, text: 'beat the whole damn ga-ame' }),
    new LyricSlide({ timeIn: 81.456564, timeOut: 83.276111, text: 'We\'re happy you made it' }),
    new LyricSlide({ timeIn: 83.476107, timeOut: 85.248763, text: 'But how are you gonna spend' }),
    new LyricSlide({ timeIn: 85.248763, timeOut: 87.592777, text: 'the rest of this da-ay' }),
    new LyricSlide({ timeIn: 89.137108, timeOut: 92.810025, text: 'Maybe watch a video' }),
    new LyricSlide({ timeIn: 92.810025, timeOut: 94.702407, text: 'Maybe press refresh' }),
    new LyricSlide({ timeIn: 94.702407, timeOut: 95.663834, text: 'and start again' }),

    new LyricSlide({ timeIn: 96.491651, timeOut: 98.614725, text: 'Yes it\'s over now' }),
    new LyricSlide({ timeIn: 99.723953, timeOut: 101.586446, text: 'we didn\'t want to' }),
    new LyricSlide({ timeIn: 101.586446, timeOut: 103.916165, text: 'make a longer game' }),
    new LyricSlide({ timeIn: 103.916165, timeOut: 105.039407, text: 'This is it' }),
    new LyricSlide({ timeIn: 105.039407, timeOut: 107.117157, text: 'I swear it\'s true' }),
    new LyricSlide({ timeIn: 107.759486, timeOut: 108.873535, text: 'oohh ohh' }),

    new LyricSlide({ timeIn: 111.125234, timeOut: 112.787982, text: 'Now you\'re a hero' }),
    new LyricSlide({ timeIn: 112.787982, timeOut: 113.9453, text: 'You managed to' }),
    new LyricSlide({ timeIn: 113.9453, timeOut: 117.034376, text: 'beat the whole damn ga-ame' }),
    new LyricSlide({ timeIn: 118.166563, timeOut: 119.98611, text: 'We\'re happy you made it' }),
    new LyricSlide({ timeIn: 120.186106, timeOut: 121.958762, text: 'But how are you gonna spend' }),
    new LyricSlide({ timeIn: 121.958762, timeOut: 124.302776, text: 'the rest of this da-ay' }),
    new LyricSlide({ timeIn: 125.847107, timeOut: 129.520024, text: 'Maybe watch a video' }),
    new LyricSlide({ timeIn: 129.520024, timeOut: 131.412406, text: 'Maybe press refresh' }),
    new LyricSlide({ timeIn: 131.412406, timeOut: 132.373833, text: 'and start again' }),

    new GameOverSlide({ timeIn: 134.084787, fadeTime: 3, text: 'Game over' })
];

export { slides };

// one frame = 20.69989
// 0 70.447023
// 1 fadeinstart 3.158386
// 1 fadeinend 3.625043
// 1 fadeoutstart 10.102125
// 1 fadeoutend 10.540059
// 2 fadeinstart 11.89449
// 2 fadeinend 12.363112
// 2 fadeoutstart 18.806675
// 2 fadeoutend 19.374947
// 3 fadeinstart 20.633224
// 3 fadeinend 21.185954
// 3 fadeoutstart 27.534666
// 3 fadeoutend 28.119119
// 4 fadeinstart 29.364552
// 4 fadeinend 29.908917
// 4 fadeoutstart 36.448878
// 4 fadeoutend 36.967399
// 5 fadeinstart 38.17481
// 5 fadeinend 38.687975
// 5 fadeoutstart 45.208802
// 5 fadeoutend 45.787413
// Now you're a hero 52.289314 53.952062
// You managed to 53.952062 55.10938
// beat the whole damn ga-ame 55.10938 58.198456
// We're happy you made it 59.330643 61.15019
// But how are you gonna spend 61.350186 63.122842
// the rest of this da-ay 63.122842 65.466856
// Maybe watch a video 67.011187 70.684104
// Maybe press refresh 70.684104 72.576486
// and start again 70.684104 73.537913
// 
// Now you're a hero 74.415235 76.130476
// You managed to 76.130476 77.202936
// ...
// and start again ... 95.670418
// 
// Yes it's over now 96.491651 98.614725
// we didn't want to 99.723953 101.586446
// make a longer game 101.586446 103.916165
// This is it 103.916165 105.039407
// I swear it's true 105.039407 107.117157
// oohh ohh 107.759486 108.873535
///
// Now you're a hero 111.125234 ..
// ...
// and start again ... 132.611929
// Game Over fadestart 