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
      const railBoundary = Math.ceil(input.length / 2);
      myRails[0] = input.slice(0, railBoundary).split('');
      myRails[1] = input.slice(railBoundary, input.length).split('');
      if (input.length === 3) {
        return myRails[0].shift() + myRails[1].shift() + myRails[0].shift();
      } else if (input.length === 4) {
        return myRails[0].shift() + myRails[1].shift()
          + myRails[0].shift() + myRails[1].shift();
      } else if (input.length === 5) {
        return myRails[0].shift() + myRails[1].shift()
          + myRails[0].shift() + myRails[1].shift()
          + myRails[0].shift();
      }
    }
    return input;
  }
}

export default RailFenceCipher;
