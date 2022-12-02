/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

/**@type {HTMLInputElement}*/
const language = document.getElementById('language');

/**@type {HTMLDivElement}*/
const list = document.getElementById('list');

/**@type {HTMLDivElement}*/
const link = document.getElementById('link');

/**@type {HTMLInputElement}*/
const size = document.getElementById('size');

/**@type {HTMLDivElement}*/
const regular = document.getElementById('regular');

/**@type {HTMLDivElement}*/
const small = document.getElementById('small');

/**@type {HTMLInputElement}*/
const type = document.getElementById('type');

/**@type {HTMLDivElement}*/
const rounded = document.getElementById('rounded');

/**@type {HTMLDivElement}*/
const squared = document.getElementById('squared');

/**@type {HTMLButtonElement}*/
const copy = document.getElementById('copy');

/**@type {SVGAElement}*/
const copyImg = document.getElementById('copy-img');

/**@type {HTMLDivElement}*/
const preview = document.getElementById('preview');

/**@type {HTMLDivElement}*/
const previewBox = document.getElementById('preview-box');

/**@type {HTMLDivElement}*/
const confirmed = document.getElementById('confirmed');

/**@type {HTMLImageElement}*/
const imgP = document.getElementById('img-p');

/**@type {SVGAElement}*/
const imgR = document.getElementById('img-r');


const color = {
    TURQUOISE: '#00ff9d',
    LIGHT: '#cacaca',
    DARK2: '#242424',
    GREEN: '#66ff00',
    RED: '#ff0040'
};


const url = `https://gh-tags.vercel.app/api?`;
link.textContent = url;


const githubLiguistPromise = fetch(`https://raw.githubusercontent.com/github/linguist/master/lib/linguist/languages.yml`)
    .then(res => res.text()
        .then(e => e.replace(/^(#|-+|\s+).*|\n/gm, '').split(':').map(e => [format(e), e])
        ).catch()
    ).catch();


list.style.width = language.clientWidth;
const languageResetStyle = () => language.style.borderRadius = `100px`;
const languageStyled = () => language.style.borderRadius = `20px 20px 0 0`;
const listOn = () => {
    list.style.width = language.clientWidth;
    list.style.display = 'block';
};
const listOff = () => list.style.display = 'none';
const clearList = () => list.innerHTML = '';


document.onclick = ev => {
    const isClicked = [list, language]
        .map(elem => elem.contains(ev.target))
        .some(e => e);

    if (!isClicked) {
        languageResetStyle();
        listOff();
    }
};


/**@param {string} str*/
const format = (str = '') => str
    .replace(/\s/g, '-')
    .replace(/\+/g, '-plus')
    .replace(/\*/g, '-asterisk')
    .replace(/\#/g, '-sharp')
    .toLowerCase();


/**@param {'error'?} status*/
const copyBtn = status => {
    copy.onmouseover = () => {
        link.style.borderColor = status === 'error' ? color.RED : color.TURQUOISE;
        copy.style.cssText = status === 'error' ?
            `border-color:${color.RED}; background:${color.RED};`
            : `border-color:${color.TURQUOISE}; background:${color.TURQUOISE};`;
        copyImg.style.fill = color.DARK2;
    };

    copy.onclick = () => {
        confirmed.style.display = 'block';
        setTimeout(() => confirmed.style.display = 'none', 3000);
        status === 'error' ? null : navigator.clipboard.writeText(link.innerHTML);
    };

    confirmed.style.color = status === 'error' ? color.RED : color.GREEN;
    confirmed.textContent = status === 'error' ? `Broken link! Can't be copied! ✘` : `Link copied! ✔`;
};


copyBtn();


copy.onmouseleave = () => {
    link.style.borderColor = color.LIGHT;
    copy.style.borderColor = color.LIGHT;
    copy.style.background = color.DARK2;
    copyImg.style.fill = color.LIGHT;
};


const suggestResponse = async () => {
    const keyword = () => format(language.value);
    const data = await githubLiguistPromise;

    const hotwords = data
        .filter(e => e[0].match(new RegExp(`^${keyword()}.*`)))
        .map(e => `<option>${e[1]}</option>`)
        .join('');

    list.innerHTML = hotwords;

    if (keyword() && hotwords.length > 0) {

        list.innerHTML ? (languageStyled(), listOn()) : languageResetStyle();

        [...document.getElementsByTagName('option')]
            .forEach(elem =>
                elem.onclick = () => {
                    language.value = elem.textContent;
                    listOff();
                    languageResetStyle();
                    previewResponse();
                }
            );

    } else {
        languageResetStyle();
        clearList();
        listOff();
    }
};


const previewResponse = () => {
    link.textContent = `${url}${language.value ? `lang=${format(language.value)}` : ''}${size.checked ? '&size=small' : ''}${type.checked ? '&type=squared' : ''}`;

    if (link.textContent === url) {
        copyBtn();
        preview.className = 'none';
        confirmed.style.right = 20;
        link.style.color = color.LIGHT;
    } else {
        confirmed.style.right = 10;

        previewBox.className = 'group-flex';
        preview.removeAttribute('class');

        imgP.removeAttribute('class');
        imgP.src = link.textContent;
        imgR.style.display = 'none';

        imgP.onload = () => {
            copyBtn();
            link.style.color = color.GREEN;
        };

        imgP.onerror = () => {
            link.style.color = color.RED;
            imgP.className = 'none';
            imgR.style.display = 'block';
            copyBtn('error');
        };
    }
};


language.onfocus = () => list.innerHTML && (languageStyled(), listOn());
language.oninput = () => (suggestResponse(), previewResponse());


size.onchange = () => {
    previewResponse();
    size.checked ?
        (
            regular.style.color = color.LIGHT,
            small.style.color = color.TURQUOISE
        )
        : (
            regular.style.color = color.TURQUOISE,
            small.style.color = color.LIGHT
        );
};


type.onchange = () => {
    previewResponse();
    type.checked ?
        (
            rounded.style.background = color.LIGHT,
            squared.style.background = color.TURQUOISE
        )
        : (
            rounded.style.background = color.TURQUOISE,
            squared.style.background = color.LIGHT
        );
};
