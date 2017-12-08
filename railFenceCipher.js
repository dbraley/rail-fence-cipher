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
        let start = 0;
        let end = start + 1;
        myRails[0] = input.slice(start, end).split('');
        start = end;
        end = start + 2;
        myRails[1] = input.slice(start, end).split('');
        start = end;
        end = start + 2;
        myRails[2] = input.slice(start, end).split('');
      } else if (input.length === 5) {
        myRails[0] = input.slice(0, 2).split('');
        myRails[1] = input.slice(2, 4).split('');
        myRails[2] = input.slice(4, 6).split('');
      } else if (input.length === 6) {
        myRails[0] = input.slice(0, 2).split('');
        myRails[1] = input.slice(2, 5).split('');
        myRails[2] = input.slice(5, 7).split('');
      } else if (input.length === 7) {
        myRails[0] = input.slice(0, 2).split('');
        myRails[1] = input.slice(2, 5).split('');
        myRails[2] = input.slice(5, 8).split('');
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
