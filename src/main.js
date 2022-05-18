const { updateGameData, readFile, readJSON, writeFile, writeJson } = require('./dataModifiers.js');
const { isWordValid } = require('./wordValidation.js');
const { generatePage } = require('./webpageGeneration.js');

const main = function (guess, { gameDataFile, template, wordsFile }) {
  const validWords = readJSON(wordsFile);
  if (!isWordValid(guess, validWords)) {
    console.log('Enter 5 letter valid word');
    return 0;
  }

  let gameData = readJSON(gameDataFile);
  const templateAsString = readFile(template);

  gameData = updateGameData(gameData, guess);
  writeJson(gameDataFile, gameData);

  const webpage = generatePage(gameData, guess, templateAsString);
  writeFile('./index.html', webpage);
};

const dataFile = './resources/data.json';
const template = './resources/template.html';
const wordsFile = './resources/words.json';

main(process.argv[2], { dataFile, template, wordsFile });
