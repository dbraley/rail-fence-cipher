import { range, flatten } from 'underscore';

class RailFenceCipher {
  constructor(rails = 0) {
    this.railCount = rails;
    this.railMapping = this.generateRailMapping();
  }

  generateRailMapping() {
    if (this.railCount <= 1) return [0];
    return [].concat(range(0, this.railCount - 1)).concat(range(this.railCount - 1, 0, -1));
  }

  encrypt(input) {
    const myRails = range(0, this.railCount).map(() => []);
    input.split('').forEach((letter, index) => {
      myRails[this.getRailNumberForIndex(index)].push(letter);
    });
    return flatten(myRails).join('');
  }

  getRailNumberForIndex(index) {
    return this.railMapping[index % (this.railMapping.length)];
  }

  decrypt(input) {
    if (this.railCount === 3) {
      if (input.length === 4) {
        return input[0] + input[1] + input[3] + input[2];
      } else if (input.length === 5) {
        return input[0] + input[2] + input[4] + input[3] + input[1];
      }
      return input;
    }
    if (this.railCount === 2) {
      const myRails = range(0, this.railCount).map(() => []);
      if (input.length === 3) {
        myRails[0].push(input[0], input[1]);
        myRails[1].push(input[2]);
        return myRails[0][0] + myRails[1][0] + myRails[0][1];
      } else if (input.length === 4) {
        myRails[0].push(input[0], input[1]);
        myRails[1].push(input[2], input[3]);
        return myRails[0][0] + myRails[1][0]
          + myRails[0][1] + myRails[1][1];
      } else if (input.length === 5) {
        myRails[0].push(input[0], input[1], input[2]);
        myRails[1].push(input[3], input[4]);
        return myRails[0][0] + myRails[1][0]
          + myRails[0][1] + myRails[1][1]
          + myRails[0][2];
      }
    }
    return input;
  }
}

export default RailFenceCipher;
