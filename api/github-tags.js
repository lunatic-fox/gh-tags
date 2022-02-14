const build = require('../src/build');

module.exports = async (req, res) => {
    const svg = await build(req);

    if (svg) {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(svg);
    } else {
        res.end('not found');
    }
    
};
