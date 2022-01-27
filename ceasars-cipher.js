function shiftLetter(letter, lengthShift) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const l = letter.toUpperCase();
  if (!alphabet.includes(l)) {
    return letter;
  }
  const findIdx = (alphabet.indexOf(l) + lengthShift) % 26;
  return alphabet[findIdx];
}

function rot13(str) {
  let _str = '';
  for(let i = 0; i < str.length; i++) {
    _str += shiftLetter(str[i], 13)
  }
  return _str;
}

rot13("SERR PBQR PNZC"); // => FREE CODE CAMP
