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
    if (input.length <= this.railCount) {
      return input;
    }
    if (this.railCount === 3) {
      const myRails = range(0, this.railCount).map(() => []);
      if (input.length === 4) {
        myRails[0].push(input[0]);
        myRails[1].push(input[1], input[2]);
        myRails[2].push(input[3]);
        return myRails[0].shift() + myRails[1].shift() + myRails[2].shift() + myRails[1].shift();
      } else if (input.length === 5) {
        myRails[0].push(input[0], input[1]);
        myRails[1].push(input[2], input[3]);
        myRails[2].push(input[4]);
      }
      let result = '';
      for (let i = 0; i < input.length; i++) {
        let number = this.getRailNumberForIndex(i);
        result += myRails[number].shift();
      }
      return result;
    }
    if (this.railCount === 2) {
      const myRails = range(0, this.railCount).map(() => []);
      const railBoundary = Math.ceil(input.length / 2);
      myRails[0] = input.slice(0, railBoundary).split('');
      myRails[1] = input.slice(railBoundary, input.length).split('');
      let result = '';
      for (let i = 0; i < input.length; i++) {
        result += myRails[i % 2].shift();
      }
      return result;
    }
    return input;
  }
}

export default RailFenceCipher;
