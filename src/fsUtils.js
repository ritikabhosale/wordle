const fs = require('fs');

const readFile = filePath => fs.readFileSync(filePath, 'utf8');
const writeFile = (file, content) => fs.writeFileSync(file, content, 'utf8');
const readJSON = file => JSON.parse(readFile(file));
const writeJson = (file, content) => writeFile(file, JSON.stringify(content));

exports.readFile = readFile;
exports.writeFile = writeFile;
exports.readJSON = readJSON;
exports.writeJson = writeJson;
