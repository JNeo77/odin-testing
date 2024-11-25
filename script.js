function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

const calculator = {
  add(a,b) {
    return a + b;
  },

  subtract(a,b) {
    return a - b;
  },

  divide(a,b) {
    return a / b;
  },

  multiply(a,b) {
    return a * b;
  }

}

function caesarCipher(str, shift) {
  const string = str.split('');
  const plainLowerAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const plainUpperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const firstPart = plainLowerAlpha.slice(Math.abs(shift)); 
  const secondPart = plainLowerAlpha.slice(0, Math.abs(shift));

  const cipherAlpha = firstPart.concat(secondPart);

  const cipherWordArray = [];

  string.forEach((character) => {
    if (plainLowerAlpha.includes(character)) {
      const alphaIndex = plainLowerAlpha.indexOf(character);
      cipherWordArray.push(cipherAlpha[alphaIndex]);
    } else if (plainUpperAlpha.includes(character)) {
      const alphaIndex = plainUpperAlpha.indexOf(character);
      cipherWordArray.push(cipherAlpha[alphaIndex].toUpperCase());
    } else {
      cipherWordArray.push(character);
    }
  });

  return cipherWordArray.join('');
}

function analyzeArray(array) {
  
  const ave = array.reduce((a,b) => a + b) / array.length; 

  const object = {
    average: ave,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }

  return object;
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }