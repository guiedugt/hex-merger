"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexList = exports.isSimilarRGB = exports.getRGBListAvg = exports.rgbToHex = exports.hexToRGB = void 0;
const hexMatchRegexp = /(?:#?(\w{2})(\w{2})(\w{2}))|(?:#?(\w)(\w)(\w))/;
const hexToRGB = (hex) => {
    const [, rr, gg, bb, r, g, b] = hex.match(hexMatchRegexp);
    return {
        r: parseInt(rr !== null && rr !== void 0 ? rr : r.repeat(2), 16),
        g: parseInt(gg !== null && gg !== void 0 ? gg : g.repeat(2), 16),
        b: parseInt(bb !== null && bb !== void 0 ? bb : b.repeat(2), 16),
    };
};
exports.hexToRGB = hexToRGB;
const rgbToHex = (rgb) => {
    const { r, g, b } = rgb;
    const getHex = (x) => {
        const char = x.toString(16);
        if (char.length === 1) {
            return `0${char}`;
        }
        return char;
    };
    return `${getHex(r)}${getHex(g)}${getHex(b)}`;
};
exports.rgbToHex = rgbToHex;
const getRGBListAvg = (rgbList) => {
    const rgbSum = rgbList.reduce((sum, rgb) => ({
        r: sum.r + rgb.r,
        g: sum.g + rgb.g,
        b: sum.b + rgb.b,
    }), { r: 0, g: 0, b: 0 });
    return {
        r: Math.floor(rgbSum.r / rgbList.length),
        g: Math.floor(rgbSum.g / rgbList.length),
        b: Math.floor(rgbSum.b / rgbList.length),
    };
};
exports.getRGBListAvg = getRGBListAvg;
const DIFFERENCE_RATIO = 100;
const isSimilarRGB = (a, b) => {
    const rDiff = Math.abs(a.r - b.r);
    const gDiff = Math.abs(a.g - b.g);
    const bDiff = Math.abs(a.b - b.b);
    return (rDiff <= DIFFERENCE_RATIO
        && gDiff <= DIFFERENCE_RATIO
        && bDiff <= DIFFERENCE_RATIO);
};
exports.isSimilarRGB = isSimilarRGB;
exports.hexList = [
    '#000000',
    '#0375FF',
    '#0088CC',
    '#0B4F6C',
    '#1669AD',
    '#191919',
    '#1975C1',
    '#1978C8',
    '#1B76B9',
    '#1EA7FD',
    '#222222',
    '#282C34',
    '#2B79C2',
    '#303030',
    '#3085d6',
    '#333333',
    '#353535',
    '#357EBD',
    '#3676B4',
    '#3B668A',
    '#3E8CC4',
    '#444444',
    '#4F4F4F',
    '#545454',
    '#595959',
    '#61DAFB',
    '#66BF3C',
    '#7C9FCC',
    '#808080',
    '#828282',
    '#878787',
    '#929292',
    '#999999',
    '#9B9B9B',
    '#A5A5A5',
    '#AAAAAA',
    '#AACCCC',
    '#B3B2B3',
    '#B4E5FB',
    '#BBBBBB',
    '#BDBDBD',
    '#BDBEC4',
    '#BEBEBE',
    '#C0C0C0',
    '#C4C4C4',
    '#C7C7C7',
    '#CCCCCC',
    '#D8D8D8',
    '#DBF0FF',
    '#DDDDDD',
    '#DDDEE4',
    '#E5E5E5',
    '#E74C3C',
    '#E7F1F8',
    '#E7FDD8',
    '#EBF4F8',
    '#ECECEC',
    '#EEEEEE',
    '#EEEBEB',
    '#EFEFEF',
    '#F0F4FB',
    '#F1F9FF',
    '#F2F2F2',
    '#F3F3F3',
    '#F3F5F7',
    '#F5FAFF',
    '#F5F5F5',
    '#FF0000',
    '#FFFFFF',
];
//# sourceMappingURL=helpers.js.map