/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const buildObject = require('../../src/build').buildObject;

module.exports = async (req, res) => {
    buildObject(req)
    .then(e => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(e));
    })
    .catch(() => {
        res.setHeader('Content-Type', 'text/html');
        res.end(require('fs').readFileSync(require('path').join(__dirname, '../../404.html')));
    });
};