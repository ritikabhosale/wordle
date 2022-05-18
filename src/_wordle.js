const countLetter = (c, l) => {
  c[l] = c[l] || 0;
  c[l]++;
  return c;
}
const frequencies = (word) => word.split('').reduce(countLetter, {});

const validateLetter = (isInPlace, isPresent, canBeCounted) => {
  if (isInPlace) {
    return 'correct';
  }
  if (isPresent && canBeCounted) {
    return 'present';
  }
  return 'absent';
}

const validate = (guess, word) => {
  const counts = frequencies(word);
  const validations = [];
  for (let i = 0; i < guess.length; i++) {
    const isInPlace = guess[i] === word[i];
    const isPresent = word.includes(guess[i]);
    const canBeCounted = counts[guess[i]] > 0;
    const status = validateLetter(isInPlace, isPresent, canBeCounted);
    if (status !== 'absent') {
      counts[guess[i]]--;
    }
    validations.push({ status, guessedLetter: guess[i] });
  }
  return validations;
}

console.log(validate('steps', 'stare'));