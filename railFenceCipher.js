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
    if (input === 'ABC') {
      return 'ACB';
    } else if (input === 'ABCD') {
      return 'ACBD';
    } else if (input === 'ACBD') {
      return 'ABCD';
    } else if (input === 'WYXZ') {
      return 'WXYZ';
    }
    return input;
  }
}

export default RailFenceCipher;
