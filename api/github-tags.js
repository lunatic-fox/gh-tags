/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const build = require('../src/build').build;

module.exports = async (req, res) => {
    build(req)
    .then(svg => {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(svg);
    })
    .catch(() => {
        res.setHeader('Content-Type', 'text/html');
        res.end(require('fs').readFileSync(require('path').join(__dirname, '../404.html')));
    });
};
