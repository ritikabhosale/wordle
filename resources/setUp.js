const fs = require('fs');

const randomInt = limit => Math.floor(Math.random() * limit);

const readWords = file => JSON.parse(fs.readFileSync(file, 'utf8'));

const randomWord = list => list[randomInt(list.length)];

const writeToFile = (file, content) => fs.writeFileSync(file, content, 'utf8');

const setUpData = function (word) {
  return {
    word: word.toLowerCase(),
    guessedWords: [],
    isGameOver: false
  };
};

const main = function (wordsFile, gameDataFile) {
  const words = readWords(wordsFile);

  const data = setUpData(randomWord(words))
  writeToFile(gameDataFile, JSON.stringify(data));
};

main('./resources/words.json', './resources/data.json');
