import fs from 'fs';

import {
  hexToRGB, rgbToHex, getRGBListAvg, isSimilarRGB,
} from './helpers';
import { HEX_LIST_INPUT, OUTPUT_PATH } from './constants';
import { IResult, IRGB } from './types';

const rgbList: IRGB[] = HEX_LIST_INPUT.map(hexToRGB);

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

const results: IResult[] = similarRGBLists.map((similarRGBList) => ({
  from: similarRGBList.map(rgbToHex),
  to: rgbToHex(getRGBListAvg(similarRGBList)),
}));

const output: string = results
  .map(({ from, to }) => `${to}: ${from.join(', ')}`)
  .join('\n');

fs.writeFileSync(OUTPUT_PATH, output, { encoding: 'utf-8' });
