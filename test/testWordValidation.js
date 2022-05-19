const { incrementOccurence, getFrequency, isAtCorrectPosition, validateLetter, isWordValid } = require("../src/wordValidation");
const assert = require('assert');

describe('incrementOccurence', () => {
  it('should increment occurence of already existing letter', () => {
    assert.deepStrictEqual(incrementOccurence({ a: 2 }, 'a'), { a: 3 });
  });

  it('should initialize occurence of non-existing letter to 1', () => {
    assert.deepStrictEqual(incrementOccurence({ a: 1 }, 'b'), { a: 1, b: 1 });
  });
});

describe('getFrequency', () => {
  it('should return the frequency of a single letter', () => {
    assert.deepStrictEqual(getFrequency('h'), { h: 1 });
  });

  it('should return the frequency of a letter occuring twice', () => {
    assert.deepStrictEqual(getFrequency('hh'), { h: 2 });
  });

  it('should return the frequency of letters of word', () => {
    assert.deepStrictEqual(getFrequency('see'), { s: 1, e: 2 });
  });
});

describe('isAtCorrectPosition', () => {
  it('should return true', () => {
    assert.deepStrictEqual(isAtCorrectPosition('car', 'cat', 0), true);
  });

  it('should return false', () => {
    assert.deepStrictEqual(isAtCorrectPosition('car', 'cat', 2), false);
  });
});

describe('validateLetter', () => {
  it('should return correct, the letter is present and has occured more number of times than guesses', () => {
    assert.deepStrictEqual(validateLetter(true, true, true), 'correct');
  });
  it('should return present, the letter is not correct but is present and has occured more number of times than guesses', () => {
    assert.deepStrictEqual(validateLetter(false, true, true), 'present');
  });
  it('should return absent, the letter not correct but is present and has already been guessed for each occurence', () => {
    assert.deepStrictEqual(validateLetter(false, true, false), 'absent');
  });
  it('should return absent, the letter is not present at all', () => {
    assert.deepStrictEqual(validateLetter(false, false, false), 'absent');
  });
});

describe('isWordValid', () => {
  it('should return false, the length of the letter is not five', () => {
    assert.deepStrictEqual(isWordValid('cat', ['apple']), false);
  });

  it('should return false, the length of the letter is five but its not in valid words list', () => {
    assert.deepStrictEqual(isWordValid('maths', ['apple']), false);
  });

  it('should return true, the length of the word is 5 and is present in the valid words list', () => {
    assert.deepStrictEqual(isWordValid('apple', ['apple', 'right']), true);
  });
});
