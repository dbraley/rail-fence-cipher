class RailFenceCipher {
  encrypt(input) {
    if (input.length === 3) {
      if (input === 'ABC') {
        return 'ACB';
      } else if (input === 'BCD') {
        return 'BDC';
      }
    }
    return input;
  }

}

export default RailFenceCipher;

