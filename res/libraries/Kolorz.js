/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * 
 * This is a extension from this project in TypeScript:
 * @link https://github.com/joseliojunior/utils/blob/main/typescript/Kolorz.ts
 * @license MIT
 *//***/

const rgx = {
    validHex: /^#*[a-f_A-F_0-9]{3,6}$/g,
    validRgb: /^(rgb\((\d+,){2}\d+\)|\((\d+,){2}\d+\)|(\d+,){2}\d+)$/g,
    validHsl: /^(hsl\(\d+,\d+%*,\d+%*\)|\(\d+,\d+%*,\d+%*\)|\d+,\d+%*,\d+%*)$/g,
    hex: /[# ]/g,
    rgb: /[rgb( )]/g,
    hsl: /[hsl( )%]/g,
    space: /[ ]/g
};

function HEXtoRGB(str) {

    // Default response.
    const def = 'rgb(0, 0, 0)';

    // If it is not a hex pattern returns default value.
    if (typeof str !== 'string' || !str.replace(rgx.space, '').match(rgx.validHex))
        return def;

    // Parses to decimal base.
    const conv = (x) => x.map(x => parseInt(x, 16)).join(', '),

        // Replace all spaces and hash symbol.
        v = str.replace(rgx.hex, '');

    // If true returns the rgb value, otherwise go ahead.
    if (v.length === 3)
        return `rgb(${conv(v.split('').map(x => x.repeat(2)))})`;

    // This region only works if the last condition is false.
    const arr = [];
    for (let i = 0; i < v.length; i += 2) {
        arr.push(v.slice(i, i + 2));
    }

    // If true returns the rgb value, otherwise go ahead.
    if (v.length === 6)
        return `rgb(${conv(arr)})`;

    // If all previous conditions are false returns the default response.
    return def;
}

function RGBtoHEX(str) {

    // Default response.
    const def = '#000000';

    // If it is not a rgb pattern returns default value.
    if (typeof str !== 'string')
        return def;

    if (str.replace(rgx.space, '').match(rgx.validRgb)) {
        const v = str.replace(rgx.rgb, '').split(','),

            // Parses to hexadecimal base.
            conv = (x) => x.map(x => +x <= 0 ? '00'
                : +x < 16 ? `0${(+x).toString(16)}`
                    : +x > 255 ? 'ff'
                        : (+x).toString(16)).join('');

        // If true returns the hex value, otherwise go ahead.
        if (v.length === 3)
            return `#${conv(v)}`;
    }

    // If all previous conditions are false returns the default response.
    return def;
}

function HEXtoHSL(str) {

    // Default response.
    const def = 'hsl(0, 0%, 0%)';

    // If it is not a hex pattern returns default value.
    if (typeof str !== 'string' || !str.replace(rgx.space, '').match(rgx.validHex))
        return def;

    const v = HEXtoRGB(str)
        .replace(rgx.rgb, '')
        .split(',')
        .map(x => +x)
        .join(',');
    return RGBtoHSL(v);
}

function RGBtoHSL(str) {

    // Default response.
    const def = 'hsl(0, 0%, 0%)';

    // If it is not a hex pattern returns default value.
    if (typeof str !== 'string' || !str.replace(rgx.space, '').match(rgx.validRgb))
        return def;

    const v = str
        .replace(rgx.rgb, '')
        .split(',')
        .map(x => +x < 0 ? 0 : +x > 255 ? 255 : x), c = v.slice(0, 3)
            .map(x => +x / 255),

        cmax = Math.max(...c),
        cmin = Math.min(...c), d = cmax - cmin,

        h = d === 0 ? 0
            : cmax == c[0] ? 60 * (((c[1] - c[2]) / d) % 6)
                : cmax == c[1] ? 60 * (((c[2] - c[0]) / d) + 2)
                    : 60 * (((c[0] - c[1]) / d) + 4),

        H = h < 0 ? 360 + h : h,
        L = (cmax + cmin) / 2,
        S = d === 0 ? 0 : d / (1 - Math.abs(2 * L - 1)),

        hsl = [H.toFixed(), `${(S * 100).toFixed()}%`, `${(L * 100).toFixed()
            }%`].join(', ');

    // If true returns the hsl value, otherwise go ahead.
    if (v.length === 3)
        return `hsl(${hsl})`;

    // If all previous conditions are false returns the default response.
    return def;
}

function HSLtoRGB(str) {

    // Default response.
    const def = 'rgb(0, 0, 0)';

    // If it is not a hsl pattern returns default value.
    if (typeof str !== 'string')
        return def;
    if (str.replace(rgx.space, '')
        .match(rgx.validHsl)) {
        const v = str
            .replace(rgx.hsl, '')
            .split(',')
            .map(x => +x);
        if (v.slice(1, 3).some(x => x > 100))
            return def;
        v[0] = v[0] > 360 ? 360 : v[0];
        const H = v[0],
            S = v[1] / 100,
            L = v[2] / 100,
            Z = (1 - Math.abs(2 * L - 1)) * S,
            X = Z * (1 - Math.abs((H / 60) % 2 - 1)),
            m = L - Z / 2, rgb = (H >= 0 && H < 60 ? [Z, X, 0]
            : H >= 60 && H < 120 ? [X, Z, 0]
                : H >= 120 && H < 180 ? [0, Z, X]
                    : H >= 180 && H < 240 ? [0, X, Z]
                        : H >= 240 && H < 300 ? [X, 0, Z]
                            : [Z, 0, X])
            .map(x => ((x + m) * 255).toFixed())
            .join(', ');

        // If true returns the hsl value, otherwise go ahead.
        if (v.length === 3)
            return `rgb(${rgb})`;
    }

    // If all previous conditions are false returns the default response.
    return def;
}

function HSLtoHEX(str) {
    return RGBtoHEX(HSLtoRGB(str));
}

/**
 * Color conversion and more.
 */
class Kolorz {
    /**
     * Converts an HEX color system code into another color system code.
     * @param {string?} string A string with the color system code to convert into another one.
     * @param {'hsl'|'rgb'|null} system The color system to convert. If this is null, returns transparent HEXA color by default.
     */
    static hex(string, system) {
        return system === 'hsl' ? HEXtoHSL(string)
            : system === 'rgb' ? HEXtoRGB(string)
                : '#000000';
    }

    /**
     * Converts an RGB color system code into another color system code.
     * @param {string?} string A string with the color system code to convert into another one.
     * @param {'hsl'|'hex'|null} system The color system to convert. If this is null, returns transparent RGBA color by default.
     */
    static rgb(string, system) {
        return system === 'hsl' ? RGBtoHSL(string)
            : system === 'hex' ? RGBtoHEX(string)
                : 'rgb(0, 0, 0)';
    }
    /**
     * Converts an HSL color system code into another color system code.
     * @param {string?} string A string with the color system code to convert into another one.
     * @param {'hex'|'rgb'|null} system The color system to convert. If this is null, returns transparent HSLA color by default.
     */
    static hsl(string, system) {
        return system === 'rgb' ? HSLtoRGB(string)
            : system === 'hex' ? HSLtoHEX(string)
                : 'hsl(0, 0%, 0%)';
    }

    /**
     * Converts an HEX color system into HSL system adjusting the lightness.
     * @param {string} color A string with HEX system color to convert.
     * @param {number?} lightness A number from 0 to 1 that represent the amount, in percentage, of lightness to add or remove from the color. If this is null, it will be set as 0 by default.
     */
    static hexHighlight(color, lightness = 0) {

        if (typeof color !== 'string' && typeof lightness !== 'number')
            return 'hsl(0, 0%, 0%)';

        const c = this.hex(color, 'hsl')
            .replace(/[hsl( )%]/g, '')
            .split(',')
            .map(e => +e);
            
        const l = +(lightness * 100).toFixed();
        return `hsl(${
            c.slice(0, 2)}%,${
            c[2] === 100 ? 0
            : c[2] >= 90 ? c[2] - (l + 30) 
            : c[2] >= 65 ? c[2] - (l + 10)
            : c[2] >= 35 ? c[2] - l
            : c[2] + l
        }%)`;
    }
}

module.exports = Kolorz;
