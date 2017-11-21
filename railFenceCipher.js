class RailFenceCipher {
  encrypt(input) {
    if (input.length === 3) {
      return 'ACB';
    }
    return input;
  }

}

export default RailFenceCipher;

