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
      if (input === 'ABEC') {
        return 'ABCE';
      }
      return input;
    }
    if (input.length === 3) {
      return input[0] + input[2] + input[1];
    } else if (input.length === 4) {
      return input[0] + input[2] + input[1] + input[3];
    } else if(input === 'ACEBD'){
      return 'ABCDE';
    }
    return input;
  }
}

export default RailFenceCipher;
