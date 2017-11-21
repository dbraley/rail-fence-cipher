class RailFenceCipher {
  constructor(rails) {
    this.rails = rails;
  }

  encrypt(input) {
    if (input.length <= this.rails) {
      return input;
    }
    const myRails = [];
    for (let i = 0; i < this.rails; i++) {
      myRails[i] = [];
    }
    if (this.rails === 2) {
      myRails[0].push(input[0]);
      myRails[1].push(input[1]);
      if (input.length >= 3) {
        myRails[0].push(input[2]);
      }
      if (input.length >= 4) {
        myRails[1].push(input[3]);
      }
      if (input.length >= 5) {
        myRails[0].push(input[4]);
      }
    } else if (this.rails === 3) {
      myRails[0].push(input[0]);
      myRails[1].push(input[1]);
      myRails[2].push(input[2]);
      if (input.length >= 4) {
        myRails[1].push(input[3]);
      }
      if (input.length >= 5) {
        myRails[0].push(input[4]);
      }
    } else if (this.rails === 4) {
      myRails[0].push(input[0]);
      myRails[1].push(input[1]);
      myRails[2].push(input[2]);
      myRails[3].push(input[3]);
      if (input.length >= 5) {
        myRails[2].push(input[4]);
      }
    }
    return [].concat(myRails[0], myRails[1], myRails[2], myRails[3]).join('');
  }

}

export default RailFenceCipher;

