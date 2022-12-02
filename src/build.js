/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const axios = require('axios').default;
const YAML = require('yaml');
const wrapper = require('./wrapper');


const githubLiguistPromise = axios.get(`https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`);


/**@param {string} lang */
const langMod = lang => 
    lang
    .replace(/\s/g, '-')
    .replace(/\+/g, '-plus')
    .replace(/\#/g, '-sharp')
    .replace(/\*/g, '-asterisk')
    .toLowerCase();


/** @param {{query: {lang: string}}} req */
const buildObject = async req => {
    const { lang } = req.query;
    
    if (!lang) return Promise.reject();

    const keyword = langMod(lang);

    const data = Object.entries(
        YAML.parse(await (await githubLiguistPromise).data)
    )
        .map(([k, v]) => ({
            lang: langMod(k),
            name: k,
            /** @type {string} */
            color: v.color || 'none'
        }))
        .filter(e => e.lang === keyword)
        .pop();

    if (!data) return Promise.reject();

    return Promise.resolve(data);
};


/** @param {{query: {lang: string, size: 'small'?, type: 'squared'? }} req */
const build = async req => {
    const { lang, size, type } = req.query;

    if (!lang) return Promise.reject();

    const keyword = langMod(lang);

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
    .filter(e => e.lang === keyword)
    .pop();

    if (!data) return Promise.reject();

    delete data.lang;

    return Promise.resolve(wrapper(data));
};

module.exports = { build, buildObject };
