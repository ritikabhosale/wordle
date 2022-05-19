const assert = require('assert');
const { emptyRow, emptyRows, generateTag, generateLetter, generateWord, getMessage } = require('../src/webpageGeneration.js');

describe('emptyRow', () => {
  it('should create a row of a cell', () => {
    const expected = '<div class="word"><div></div></div>';
    assert.deepStrictEqual(emptyRow(1), expected);
  });

  it('should create a row of two cells', () => {
    const expected = '<div class="word"><div></div><div></div></div>';
    assert.deepStrictEqual(emptyRow(2), expected);
  });

  it('should create a row of no cells', () => {
    const expected = '<div class="word"></div>';
    assert.deepStrictEqual(emptyRow(0), expected);
  });
});

describe('emptyRows', () => {
  it('should create a empty row', () => {
    const expected = ['<div class="word"><div></div><div></div><div></div><div></div><div></div></div>'];
    assert.deepStrictEqual(emptyRows(1), expected);
  });

  it('should create two empty row', () => {
    const expected = ['<div class="word"><div></div><div></div><div></div><div></div><div></div></div>', '<div class="word"><div></div><div></div><div></div><div></div><div></div></div>'];
    assert.deepStrictEqual(emptyRows(2), expected);
  });

  it('should create no rows', () => {
    const expected = [];
    assert.deepStrictEqual(emptyRows(0), expected);
  });
});

describe('generateLetter', () => {
  it('should generate tag with given content and class', () => {
    const expected = '<div class="present">a</div>';
    assert.deepStrictEqual(generateLetter(['a', 'present']), expected);
  });

  it('should generate a tag with given class and no content', () => {
    const expected = '<div class="absent"></div>';
    assert.deepStrictEqual(generateLetter(['', 'absent']), expected);
  });

  it('should generate a tag with given content and no class', () => {
    const expected = '<div>a</div>';
    assert.deepStrictEqual(generateLetter(['a', '']), expected);
  });
});

describe('generateTag', () => {
  it('should generate tag without class', () => {
    const expected = '<p>hello</p>';
    assert.deepStrictEqual(generateTag('p', 'hello', ''), expected);
  });

  it('should generate tag with class', () => {
    const expected = '<p class="intro">hello</p>';
    assert.deepStrictEqual(generateTag('p', 'hello', 'intro'), expected);
  });
});

describe('generateWord', () => {
  it('should create a 1 letter word with given class and letter', () => {
    const expected = '<div class="word"><div class="present">a</div></div>'
    assert.deepStrictEqual(generateWord([['a', 'present']]), expected);
  });

  it('should create a 2 letter word with given classes and letters', () => {
    const expected = '<div class="word"><div class="present">a</div><div class="absent">n</div></div>'
    assert.deepStrictEqual(generateWord([['a', 'present'], ['n', 'absent']]), expected);
  });
});

describe('getMessage', () => {
  it('should generate message for correct guess', () => {
    const expected = 'CONGRAGULATIONS!!! You got it right';
    assert.deepEqual(getMessage('cat', 'cat', []), expected);
  });

  it('should generate message when number of  guesses exhaust', () => {
    const expected = 'OOPS!!! Better luck next time. Correct word was cat';
    assert.deepEqual(getMessage('cat', 'rat', [[], [], [], [], [], []]), expected);
  });

  it('should not generate message if guesses are left and guess is incorrect', () => {
    const expected = '';
    assert.deepEqual(getMessage('cat', 'sat', [[]]), expected);
  });
});
