/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const axios = require('axios').default;
const YAML = require('yaml');
const wrapper = require('./wrapper');


const githubLiguistPromise = axios.get(`https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`);


/**@param {string?} lang */
const langMod = lang => {
    if (lang) {
        return lang
        .replace(/\s/g, '-')
        .replace(/\+/g, '-plus')
        .replace(/\#/g, '-sharp')
        .replace(/\*/g, '-asterisk')
        .toLowerCase();
    }
    return null;
};


/**@param {{query: {lang: string?, size: 'small'?, type: 'squared'? }} req */
const build = async req => {

    let { lang } = req.query
    const { size, type } = req.query;

    lang = langMod(lang) || '';

    const data = Object.entries(
        YAML.parse(await (await githubLiguistPromise).data)
    )
    .map(([k, v]) => ({
        lang: langMod(k),
        name: k,
        color: v.color || '#000000',
        transparent: v.color ? false : true,
        size: size,
        type: type
    }))
    .filter(e => e.lang === lang)
    .pop();

    if (!data) return null;

    delete data.lang;

    return wrapper(data);

};

module.exports = build;
