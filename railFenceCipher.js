// import _ from 'underscore';
class RailFenceCipher {
  constructor(rails) {
    this.railCount = rails;
    this.railMapping = this.generateRailMapping();
  }

  generateRailMapping() {
    if (this.railCount === undefined || this.railCount <= 1) return [0];
    return [].concat(range(0, this.railCount - 1)).concat(range(this.railCount - 1, 0, -1));
  }

  encrypt(input) {
    const myRails = initArrayOfArrays(this.railCount);
    input.split('').forEach((letter, index) => {
      myRails[this.getRailNumberForIndex(index)].push(letter);
    });
    return flattenToString(myRails);
  }

  getRailNumberForIndex (index) {
    return this.railMapping[index % (this.railMapping.length)];
  }
}

export default RailFenceCipher;

function range(start, stop, step) {
  // return _.range(start, stop, step);
  if (step === undefined) {
    step = 1;
  }
  if (start > stop) return range(stop + 1, start + 1, step * -1).reverse();
  const result = [];
  for(let i = start; i < stop; i += step) {
    result.push(i);
  }
  return result;
}

function initArrayOfArrays(size) {
  return range(0, size).map(anyValue => []);
}

function flattenToString(myRails) {
  return flatten(myRails).join('');
}

function flatten(myRails) {
  return [].concat(...myRails);
}
