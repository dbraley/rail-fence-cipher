class RailFenceCipher {
  encrypt(input) {
    if (input.length === 3) {
      return input[0] + input[2] + input[1];
    }
    return input;
  }

}

export default RailFenceCipher;

