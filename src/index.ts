import {
  hexList, hexToRGB, rgbToHex, getRGBListAvg, isSimilarRGB,
} from './helpers';
import { IRGB } from './types';

const rgbList: IRGB[] = hexList.map(hexToRGB);

const similarRGBLists = rgbList.reduce((similarLists, rgb) => {
  if (similarLists.length === 0) {
    return [[rgb]];
  }

  for (let i = 0; i < similarLists.length; i += 1) {
    const similarList = similarLists[i];
    const rgbAvg = getRGBListAvg(similarList);
    const isSimilar = isSimilarRGB(rgb, rgbAvg);

    if (isSimilar) {
      similarList.push(rgb);
      return similarLists;
    }
  }

  return [...similarLists, [rgb]];
}, [] as IRGB[][]);

const equivalentHexList = similarRGBLists
  .map(getRGBListAvg)
  .map(rgbToHex);

const similarHexList = similarRGBLists
  .map((similarList) => similarList.map(rgbToHex));

console.log({
  similarHexList, similarHexListLength: similarHexList.length, equivalentHexList, equivalentHexListLength: equivalentHexList.length,
});
