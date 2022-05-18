const fs = require('fs');

const { validate } = require('./wordValidation.js');

const readFile = filePath => fs.readFileSync(filePath, 'utf8');

const writeFile = (file, content) => fs.writeFileSync(file, content, 'utf8');

const readJSON = file => JSON.parse(readFile(file));

const writeJson = (file, content) => writeFile(file, JSON.stringify(content));

const isGameOver = (word, guess, guesses) =>
  word === guess || guesses.length === 6;

const updateGameData = function (data, guess) {
  const wordResult = validate(data.word, guess);
  data.guessedWords.push(wordResult);
  data.isGameOver = isGameOver(data.word, guess, data.guessedWords);
  return data;
};

exports.updateGameData = updateGameData;
exports.readFile = readFile;
exports.writeFile = writeFile;
exports.writeJson = writeJson;
exports.readJSON = readJSON;
