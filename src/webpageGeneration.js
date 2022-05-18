const getMessage = function (word, guess, prevGuesses) {
  if (word === guess) {
    return 'CONGRAGULATIONS!!! You got it right';
  }
  if (prevGuesses.length === 6) {
    return 'OOPS!!! Better luck next time. Correct word was ' + word;
  }
  return '';
};

const generateTag = function (tag, content, property) {
  let style = property ? ' class="' + property + '"' : '';
  return '<' + tag + style + '>' + content + '</' + tag + '>';
};

const generateLetter = function ([letter, status]) {
  return generateTag('div', letter, status);
};

const generateWord = function (letters) {
  const generatedLetters = letters.map(generateLetter).join('');
  return generateTag('div', generatedLetters, 'word');
};

const emptyRow = function (numOfCells) {
  let row = '';
  for (let index = 0; index < numOfCells; index++) {
    row += generateTag('div', '', '');
  }
  return generateTag('div', row, 'word');
};

const emptyRows = function (numOfRows) {
  const rows = [];
  for (let index = 0; index < numOfRows; index++) {
    rows.push(emptyRow(5));
  }
  return rows;
};

const gameChart = function (prevGuesses) {
  const generatedWords = prevGuesses.map(generateWord);
  const attemptsLeft = 6 - prevGuesses.length;
  const generatedEmptyRows = emptyRows(attemptsLeft);
  return generatedWords.concat(generatedEmptyRows).join('');
};

const generatePage = function (gameData, guess, templateAsString) {
  const message = getMessage(gameData.word, guess, gameData.guessedWords);
  const wordleChart = gameChart(gameData.guessedWords);
  let webpage = templateAsString.replace(/_GUESSED-WORDS_/, wordleChart);
  return webpage.replace(/_MESSAGE_/, message);
};

exports.generateTag = generateTag;
exports.generateLetter = generateLetter;
exports.generateWord = generateWord;
exports.generatePage = generatePage;
exports.emptyRow = emptyRow;
exports.emptyRows = emptyRows;
