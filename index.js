'use strict';

/**
 * Removes all comments, tabs, whitespaces, new lines and carriage returns
 * @param {string} inputFilePath
 * @param {string} outputFilePath
 * @return {File}
 */
const fs = require('fs');

  const inputFile = process.argv[2] || 'map.svg';
  const outputFile = process.argv[3] || 'map.min.svg';

  const data = fs.readFileSync(inputFile, 'utf8');
  const minified = data.replace(/(<!--.*-->)|(\n)|(\r)/g, '').replace(/>\s+</g,'><');

  fs.writeFileSync(outputFile, minified, { encoding: 'utf8' });
