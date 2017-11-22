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
      for (let i = 0; i < input.length; i++) {
        let rail = i%2;
        myRails[rail].push(input[i]);
      }
    } else if (this.rails === 3) {
      let railToUse = [0,1,2,1];
      for (let i = 0; i < input.length; i++) {
        let rail = railToUse[i%(railToUse.length)];
        myRails[rail].push(input[i]);
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

