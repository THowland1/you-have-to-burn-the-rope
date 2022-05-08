export const canvas = document.querySelector('canvas');
export const c = canvas.getContext('2d');

export const FRAME_WIDTH = 22 * 32;
export const FRAME_HEIGHT = 16 * 32;

canvas.height = FRAME_HEIGHT;
canvas.width = FRAME_WIDTH;