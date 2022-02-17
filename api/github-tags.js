/**
 * @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 * @copyright Josélio de S. C. Júnior 2021
 * @license MIT
 *//***/

const fs = require('fs');
const build = require('../src/build');

module.exports = async (req, res) => {
    const svg = await build(req);

    if (svg) {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(svg);
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(
            fs.readFileSync(
                require('path').join(__dirname, '../404.html')
            )
        );
    }
    
};
