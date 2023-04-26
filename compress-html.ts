const fs = require('fs');
const { minify } = require('html-minifier');

const html = fs.readFileSync('./public/index.html', 'utf8');

const compressedHtml = minify(html, {
  collapseWhitespace: true,
  removeComments: true
});

fs.writeFileSync('./public/index.html', compressedHtml, 'utf8');