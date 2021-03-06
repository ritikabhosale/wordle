const { readFile, writeFile, writeJson, readJSON } = require("./fsUtils");
const { updateGameData } = require('./updateGameData.js');
const { isWordValid } = require('./wordValidation.js');
const { generatePage } = require('./webpageGeneration.js');

const main = function (guess, { gameDataFile, template, wordsFile, htmlFile }) {
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
  writeFile(htmlFile, webpage);

  if (gameData.isGameOver === true) { process.exit(1) };
};

const files = {
  gameDataFile: './resources/data.json',
  template: './resources/template.html',
  wordsFile: './resources/words.json',
  htmlFile: './index.html'
};

main(process.argv[2], files);
