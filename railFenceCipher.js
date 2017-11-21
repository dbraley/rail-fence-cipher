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
    const rail_2 = [];
    const rail_3 = [];
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
    } else if (this.rails === 3) {
      rail_0.push(input[0]);
      rail_1.push(input[1]);
      rail_2.push(input[2]);
      if (input.length >= 4) {
        rail_1.push(input[3]);
      }
      if (input.length >= 5) {
        rail_0.push(input[4]);
      }
    } else if (this.rails === 4) {
      rail_0.push(input[0]);
      rail_1.push(input[1]);
      rail_2.push(input[2]);
      rail_3.push(input[3]);
      if (input.length >= 5) {
        rail_2.push(input[4]);
      }
    }
    return [].concat(rail_0, rail_1, rail_2, rail_3).join('');
  }

}

export default RailFenceCipher;

