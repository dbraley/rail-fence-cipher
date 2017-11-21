class RailFenceCipher {
  encrypt(input) {
    if (input.length === 3) {
      return input[0] + input[2] + input[1];
    } else if (input.length === 4) {
      return input[0] + input[2] + input[1] + input[3];
    } else if (input.length === 5) {
      return input[0] + input[2] + input[4] + input[1] + input[3];
    }
    return input;
  }

}

export default RailFenceCipher;

