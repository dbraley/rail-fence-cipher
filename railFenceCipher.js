class RailFenceCipher {
  constructor(rails) {
    this.rails = rails;
  }

  encrypt(input) {
    if (input.length <= this.rails) {
      return input;
    }
    const rail_0 = [];
    const rail_1 = [];
    if (this.rails === 2) {
      rail_0.push(input[0]);
      rail_1.push(input[1]);
      if (input.length >= 3) {
        rail_0.push(input[2]);
      }
      if (input.length >= 4) {
        rail_1.push(input[3]);
      }
      if (input.length >= 5) {
        rail_0.push(input[4]);
      }
      return [].concat(rail_0, rail_1).join('');
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

