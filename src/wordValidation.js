const incrementOccurence = function (frequency, letter) {
  frequency[letter] = frequency[letter] || 0;
  frequency[letter]++;
  return frequency;
};

const getFrequency = function (word) {
  return [...word].reduce(incrementOccurence, {});
};

const isAtCorrectPosition = function (word, guess, index) {
  return word[index] === guess[index];
};

const validateLetter = (isInPlace, isPresent, canBeCounted) => {
  if (isInPlace) {
    return 'correct';
  }
  if (isPresent && canBeCounted) {
    return 'present';
  }
  return 'absent';
};

const validate = (word, guess) => {
  const counts = getFrequency(word);
  const validations = [];
  for (let index = 0; index < guess.length; index++) {
    const isInPlace = isAtCorrectPosition(word, guess, index);
    const isPresent = word.includes(guess[index]);
    const canBeCounted = counts[guess[index]] > 0;

    const status = validateLetter(isInPlace, isPresent, canBeCounted);
    if (status !== 'absent') {
      counts[guess[index]]--;
    }
    validations.push([guess[index], status]);
  }
  return validations;
};

const isWordValid = function (word, validWords) {
  return word.length === 5 && validWords.includes(word);
};

exports.isWordValid = isWordValid;
exports.validate = validate;
exports.incrementOccurence = incrementOccurence;
exports.getFrequency = getFrequency;
exports.isAtCorrectPosition = isAtCorrectPosition;
exports.validateLetter = validateLetter;
