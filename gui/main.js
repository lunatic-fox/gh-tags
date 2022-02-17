/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/
 
/**@type {HTMLInputElement}*/
const language = document.getElementById('language');

/**@type {HTMLDivElement}*/
const link = document.getElementById('link');

/**@type {HTMLInputElement}*/
const size = document.getElementById('size');

/**@type {HTMLInputElement}*/
const type = document.getElementById('type');

/**@type {HTMLButtonElement}*/
const copy = document.getElementById('copy');

/**@type {HTMLDivElement}*/
const preview = document.getElementById('preview');

/**@type {HTMLDivElement}*/
const previewBox = document.getElementById('preview-box');

/**@type {HTMLDivElement}*/
const confirmed = document.getElementById('confirmed');

/**@type {SVGAElement}*/
const copyImg = document.getElementById('copy-img');

/**@type {HTMLImageElement}*/
const imgP = document.getElementById('img-p');

/**@type {SVGAElement}*/
const imgR = document.getElementById('img-r');


const url = `https://gh-tags.vercel.app/api?`;
link.textContent = url;


size.placeholder = `"small" or leave it blank`;
type.placeholder = `"squared" or leave it blank`;


copy.onmouseleave = () => copyImg.style.fill = '#cacaca';
copy.onmouseover = () => copyImg.style.fill = '#242424';


/**@param {string} str*/
const toLink = (str = '') => str
    .replace(/\s/g, '-')
    .replace(/\+/g, '-plus')
    .replace(/\*/g, '-asterisk')
    .replace(/\#/g, '-sharp')
    .toLowerCase();


const response = () => {
    link.textContent = `${url}${language.value ? `lang=${toLink(language.value)}` : ''}${size.value ? `&size=${toLink(size.value)}` : ''}${type.value ? `&type=${toLink(type.value)}` : ''}`;

    if (link.textContent === url) {
        preview.className = 'none';
    } else {
        previewBox.className = 'group-flex';
        preview.removeAttribute('class');

        imgP.height = toLink(size.value) === 'small' ? 20 : 32;
        imgP.removeAttribute('class');
        imgP.src = link.textContent;
        imgR.style.display = 'none';

        imgP.onerror = () => {
            imgP.className = 'none';
            imgR.style.display = 'block';
        };
    }
};


language.onchange = response;
size.onchange = response;
type.onchange = response;


copy.onclick = () => {
    confirmed.style.display = 'block';
    setTimeout(() => confirmed.style.display = 'none', 3000);
    navigator.clipboard.writeText(link.innerHTML);
};


window.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
        switch (document.activeElement) {
            case language:
                size.focus();
                break;
            case size:
                type.focus();
                break;    
            default:
                language.focus();
                break;
        }
    }

    if (e.key === 'ArrowUp') {
        switch (document.activeElement) {
            case type:
                size.focus();
                break;
            case size:
                language.focus();
                break;
            default:
                type.focus();
                break;
        }
    }
});
