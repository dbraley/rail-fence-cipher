class RailFenceCipher {
  constructor(rails) {
    this.rails = rails;
  }

  encrypt(input) {
    if (this.rails === 2) {
      if (input.length === 3) {
        return input[0] + input[2] + input[1];
      } else if (input.length === 4) {
        return input[0] + input[2] + input[1] + input[3];
      } else if (input.length === 5) {
        return input[0] + input[2] + input[4] + input[1] + input[3];
      }
      return input;
    } else if (this.rails === 3) {
      if (input.length === 4) {
        return input[0] +
          input[1] + input[3] +
          input[2];
      }
      if (input.length === 5) {
        return input[0] + input[4] +
          input[1] + input[3] +
          input[2];
      }
      return input;
    } else if (this.rails === 4) {
      if (input.length === 5) {
        return input[0] +
          input[1] +
          input[2] + input[4] +
          input[3];
      }
      return input;
    }
  }

}

export default RailFenceCipher;

