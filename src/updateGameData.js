const { validate } = require('./wordValidation.js');

const isGameOver = (word, guess, guesses) =>
  word === guess || guesses.length === 6;

const updateGameData = function (data, guess) {
  const wordResult = validate(data.word, guess);
  data.guessedWords.push(wordResult);
  data.isGameOver = isGameOver(data.word, guess, data.guessedWords);
  return data;
};

exports.updateGameData = updateGameData;
