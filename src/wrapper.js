/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const TextToSVG = require('text-to-svg');
const kolorz = require('../res/libraries/kolorz');


const text = TextToSVG.loadSync(require('path').join(__dirname, '../res/fonts/UbuntuMono-Bold.ttf'));


/**@param {{ name: string, color: string, transparent: boolean, size: string?, type: string? }} guide*/
const wrapper = guide => {
    const { name, color, transparent, size, type } = guide;
    const [ boxHeight, fontSize, rightPadding, pos ] = size === 'small' ? [20, 16, 14, 8] : [32, 24, 22, 12];
    const width = +(((fontSize / 2) + .1) * name.length + rightPadding).toFixed();
    const contrastColor = kolorz(color).contrast.toHEX;
    const radius = type === 'squared' ? 1 : boxHeight / 2;

    const svg = text.getPath(name, {
        x: pos,
        y: pos,
        fontSize: fontSize,
        attributes: {
            fill: contrastColor
        }
    });

    return `<svg 
    width="${width + 2}"
    height="${boxHeight + 2}"
    xmlns="http://www.w3.org/2000/svg"
    >${transparent ? `
    <defs>
        <pattern id="pattern" x="3" y="3" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect height="6" width="6" fill="#ffffff"/>
            <line x1="0" y1="0" x2="0" y2="6" stroke="#bbbbbb" stroke-width="2" />
        </pattern>
    </defs>` : ''}
    <rect 
        height="${boxHeight}"
        width="${width}"
        rx="${radius}"
        ry="${radius}"
        x="1"
        y="1"
        fill="${transparent ? "url(#pattern)" : color}"
        stroke="${contrastColor}"
        stroke-width="1"
    />
    <g transform="translate(0, ${fontSize / 2})">
        ${svg}
    </g>
</svg>`;

};
module.exports = wrapper;
