/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const rgx = {
    HEX: /^#{0,1}([a-fA-F0-9]{3}|[a-fA-F0-9]{6})$/,
    HEXA: /^#{0,1}([a-fA-F0-9]{4}|[a-fA-F0-9]{8})$/,
    RGB: /^((rgb){0,1}\(){0,1}((2([0-4]\d|5[0-5])|1\d{2}|[1-9]\d|\d),){2}(2([0-4]\d|5[0-5])|1\d{2}|[1-9]\d|\d)\){0,1}$/,
    RGBA: /^((rgba){0,1}\(){0,1}((2([0-4]\d|5[0-5])|1\d{2}|[1-9]\d|\d),){2}(2([0-4]\d|5[0-5])|1\d{2}|[1-9]\d|\d),([01]|[01]{0,1}\.\d{0,3})\){0,1}$/,
    HSL: /^((hsl){0,1}\(){0,1}(360|3[0-5]\d|[12]\d{2}|[1-9]\d|\d)°{0,1},(100|[1-9]\d|\d)%{0,1},(100|[1-9]\d|\d)%{0,1}\){0,1}$/,
    HSLA: /^((hsla){0,1}\(){0,1}(360|3[0-5]\d|[12]\d{2}|[1-9]\d|\d)°{0,1},(100|[1-9]\d|\d)%{0,1},(100|[1-9]\d|\d)%{0,1},([01]|[01]{0,1}\.\d{0,3})\){0,1}$/,

    unpackRGBA: e => `${e}`.replace(/[rgba()]/g, '').split(',').map(e => +e),
    unpackHSLA: e => `${e}`.replace(/[hsla()°%]/g, '').split(',').map(e => +e),

    /** @param {string} code */
    validateHEX(code) { return `${code}`.match(this.HEX) && true; },

    /** @param {string} code */
    validateHSL(code) { return `${code}`.match(this.HSL) && true; },

    /** @param {string} code */
    validateRGB(code) { return `${code}`.match(this.RGB) && true; },

    /** @param {string} code */
    validateHEXA(code) { return `${code}`.match(this.HEXA) && true; },

    /** @param {string} code */
    validateHSLA(code) { return `${code}`.match(this.HSLA) && true; },

    /** @param {string} code */
    validateRGBA(code) { return `${code}`.match(this.RGBA) && true; }

};

/** @param {string} code */
function HEXtoRGB(code, alpha, self) {
    let codeInit = [...code.replace('#', '')];

    codeInit = codeInit.length === 3 || codeInit.length === 4 ?
        codeInit.map(e => e.repeat(2)).join('').split('')
        : codeInit;

    code = Array.from(Array(3), () => codeInit.splice(0, 2).join(''));

    if (self)
        return alpha ? [...code, codeInit.join('')] : code;

    const alphaREG = +(parseInt(codeInit.join(''), 16) / 255).toFixed(3);

    code = code.map(e => parseInt(e, 16));

    return alpha ? [...code, alphaREG] : code;
}

/** @param {string} code */
function HSLtoRGB(code, alpha) {
    code = rgx.unpackHSLA(code);

    alpha = code[3];

    const [H, S, L] = [code[0], code[1] / 100, code[2] / 100];
    const Z = (1 - Math.abs(2 * L - 1)) * S;
    const X = Z * (1 - Math.abs((H / 60) % 2 - 1));
    const M = L - Z / 2;

    code = (H >= 0 && H < 60 ? [Z, X, 0]
        : H >= 60 && H < 120 ? [X, Z, 0]
        : H >= 120 && H < 180 ? [0, Z, X]
        : H >= 180 && H < 240 ? [0, X, Z]
        : H >= 240 && H < 300 ? [X, 0, Z]
        : [Z, 0, X])
        .map(e => +((e + M) * 255).toFixed());

    return alpha ? [...code, alpha] : code;
}

/** @param {number} e */
const numToHEX = e => e <= 0 ? '00' : e < 16 ? `0${e.toString(16)}` : e >= 255 ? 'ff' : e.toString(16);

/** @param {string} code */
function RGBtoHEX(code, alpha) {
    code = rgx.unpackRGBA(code);

    const alphaHEX = numToHEX(+(code[3] * 255).toFixed());

    code = code
        .slice(0, 3)
        .map(e => numToHEX(e))

    return alpha ? [...code, alphaHEX] : code;
}

/** @param {string} code */
function HSLtoHEX(code, alpha) {
    code = rgx.unpackHSLA(code);

    const alphaHEX = numToHEX(+(code[3] * 255).toFixed());

    code = RGBtoHEX(`${HSLtoRGB(`${code.slice(0, 3)}`)}`);

    return alpha ? [...code, alphaHEX] : code;
}

/** @param {string} code */
function RGBtoHSL(code, alpha) {
    code = rgx.unpackRGBA(code);

    alpha = code[3];

    code = code.map(e => e / 255)
        .slice(0, 3);

    const cMax = Math.max(...code);
    const cMin = Math.min(...code);
    const d = cMax - cMin;
    const h = d === 0 ? 0
    : cMax === code[0] ? 60 * (((code[1] - code[2]) / d) % 6)
    : cMax === code[1] ? 60 * (((code[2] - code[0]) / d) + 2)
    : 60 * (((code[0] - code[1]) / d) + 4);

    const H = h < 0 ? 360 + h : h;
    const L = (cMax + cMin) / 2;
    const S = d === 0 ? 0 : d / (1 - Math.abs(2 * L - 1));

    code = [+H.toFixed(), +(S * 100).toFixed(), +(L * 100).toFixed()];

    return alpha ? [...code, alpha] : code;
}

/** @param {string} code */
function HEXtoHSL(code, alpha) {
    code = HEXtoRGB(code, alpha);
    code = RGBtoHSL(`${code}`, alpha);
    return code;
}

/**@param {string|[]} colorModel */
function kolorz(colorModel) {

    if (!colorModel)
        return;

    return class {
        static #code = colorModel.replace(/\s/g, '');
        static #arrKey;

        /** Converts the color model to a RGB string. */
        static get toRGB() {
            if (rgx.validateHEX(this.#code))
                return this.#arrKey ? HEXtoRGB(this.#code) : `rgb(${HEXtoRGB(this.#code)})`;
            if (rgx.validateHSL(this.#code))
                return this.#arrKey ? HSLtoRGB(this.#code) : `rgb(${HSLtoRGB(this.#code)})`;
            if (rgx.validateRGB(this.#code))
                return this.#arrKey ? rgx.unpackRGBA(this.#code) : this.#code;
        }

        /** Converts the color model to a RGBA string. */
        static get toRGBA() {
            if (rgx.validateHEXA(this.#code))
                return this.#arrKey ? HEXtoRGB(this.#code, true) : `rgba(${HEXtoRGB(this.#code, true)})`;
            if (rgx.validateHSLA(this.#code))
                return this.#arrKey ? HSLtoRGB(this.#code, true) : `rgba(${HSLtoRGB(this.#code, true)})`;
            if (rgx.validateRGBA(this.#code))
                return this.#arrKey ? rgx.unpackRGBA(this.#code) : this.#code;
        }

        /** Converts the color model to a HEX string. */
        static get toHEX() {
            if (rgx.validateRGB(this.#code))
                return this.#arrKey ? RGBtoHEX(this.#code) : `#${RGBtoHEX(this.#code).join('')}`.toUpperCase();
            if (rgx.validateHSL(this.#code))
                return this.#arrKey ? HSLtoHEX(this.#code) : `#${HSLtoHEX(this.#code).join('')}`.toUpperCase();
            if (rgx.validateHEX(this.#code))
                return this.#arrKey ? HEXtoRGB(this.#code, null, true) : `#${this.#code.replace(/#/g, '')}`.toUpperCase();
        }

        /** Converts the color model to a HEXA string. */
        static get toHEXA() {
            if (rgx.validateRGBA(this.#code))
                return this.#arrKey ? RGBtoHEX(this.#code, true) : `#${RGBtoHEX(this.#code, true).join('')}`.toUpperCase();
            if (rgx.validateHSLA(this.#code))
                return this.#arrKey ? HSLtoHEX(this.#code, true) : `#${HSLtoHEX(this.#code, true).join('')}`.toUpperCase();
            if (rgx.validateHEXA(this.#code))
                return this.#arrKey ? HEXtoRGB(this.#code, true, true) : `#${this.#code.replace(/#/g, '')}`.toUpperCase();
        }

        /** Converts the color model to a HSL string. */
        static get toHSL() {
            const mount = e => `hsl(${e[0]}°,${e[1]}%,${e[2]}%)`;
            if (rgx.validateHEX(this.#code))
                return this.#arrKey ? HEXtoHSL(this.#code) : mount(HEXtoHSL(this.#code));
            if (rgx.validateRGB(this.#code))
                return this.#arrKey ? RGBtoHSL(this.#code) : mount(RGBtoHSL(this.#code));
            if (rgx.validateHSL(this.#code))
                return this.#arrKey ? rgx.unpackHSLA(this.#code) : this.#code;
        }

        /** Converts the color model to a HSLA string. */
        static get toHSLA() {
            const mount = e => `hsla(${e[0]}°,${e[1]}%,${e[2]}%,${e[3]})`;
            if (rgx.validateHEXA(this.#code))
                return this.#arrKey ? HEXtoHSL(this.#code, true) : mount(HEXtoHSL(this.#code, true));
            if (rgx.validateRGBA(this.#code))
                return this.#arrKey ? RGBtoHSL(this.#code, true) : mount(RGBtoHSL(this.#code, true));
            if (rgx.validateHSLA(this.#code))
                return this.#arrKey ? rgx.unpackHSLA(this.#code) : this.#code;
        }

        static get contrast() {
            let c = this.toHSL || this.toHSLA;
            c = rgx.unpackHSLA(c);

            c[2] = c[2] === 100 ? 0
            : c[2] >= 90 ? c[2] - 60
            : c[2] >= 65 ? c[2] - 40
            : c[2] >= 35 ? c[2] - 30
            : c[2] + 30;

            this.#code = c.length === 3 ? `hsl(${c})` : `hsla(${c})`;
            return this;
        }

        static get asArray() {
            this.#arrKey = true;
            return this;
        }
    };

}

module.exports = kolorz;
