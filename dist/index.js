"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./helpers");
const rgbList = helpers_1.hexList.map(helpers_1.hexToRGB);
const similarRGBLists = rgbList.reduce((similarLists, rgb) => {
    if (similarLists.length === 0) {
        return [[rgb]];
    }
    for (let i = 0; i < similarLists.length; i += 1) {
        const similarList = similarLists[i];
        const rgbAvg = (0, helpers_1.getRGBListAvg)(similarList);
        const isSimilar = (0, helpers_1.isSimilarRGB)(rgb, rgbAvg);
        if (isSimilar) {
            similarList.push(rgb);
            return similarLists;
        }
    }
    return [...similarLists, [rgb]];
}, []);
const equivalentHexList = similarRGBLists
    .map(helpers_1.getRGBListAvg)
    .map(helpers_1.rgbToHex);
const similarHexList = similarRGBLists
    .map((similarList) => similarList.map(helpers_1.rgbToHex));
console.log({
    similarHexList, similarHexListLength: similarHexList.length, equivalentHexList, equivalentHexListLength: equivalentHexList.length,
});
//# sourceMappingURL=index.js.map