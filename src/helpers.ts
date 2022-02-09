import { DIFFERENCE_RATIO } from './constants';
import { IRGB } from './types';

const hexMatchRegexp = /(?:#?(\w{2})(\w{2})(\w{2}))|(?:#?(\w)(\w)(\w))/;

export const hexToRGB = (hex: string): IRGB => {
  const [, rr, gg, bb, r, g, b] = hex.match(hexMatchRegexp);

  return {
    r: parseInt(rr ?? r.repeat(2), 16),
    g: parseInt(gg ?? g.repeat(2), 16),
    b: parseInt(bb ?? b.repeat(2), 16),
  };
};

export const rgbToHex = (rgb: IRGB): string => {
  const { r, g, b } = rgb;

  const getHex = (x: number) => {
    const char = x.toString(16);
    if (char.length === 1) {
      return `0${char}`;
    }

    return char;
  };

  return `#${getHex(r)}${getHex(g)}${getHex(b)}`.toUpperCase();
};

export const getRGBListAvg = (rgbList: IRGB[]): IRGB => {
  const rgbSum = rgbList.reduce(
    (sum, rgb) => ({
      r: sum.r + rgb.r,
      g: sum.g + rgb.g,
      b: sum.b + rgb.b,
    }),
    { r: 0, g: 0, b: 0 },
  );

  return {
    r: Math.floor(rgbSum.r / rgbList.length),
    g: Math.floor(rgbSum.g / rgbList.length),
    b: Math.floor(rgbSum.b / rgbList.length),
  };
};

export const isSimilarRGB = (a: IRGB, b: IRGB) => {
  const rDiff = Math.abs(a.r - b.r);
  const gDiff = Math.abs(a.g - b.g);
  const bDiff = Math.abs(a.b - b.b);

  return (
    rDiff <= DIFFERENCE_RATIO
      && gDiff <= DIFFERENCE_RATIO
      && bDiff <= DIFFERENCE_RATIO
  );
};
