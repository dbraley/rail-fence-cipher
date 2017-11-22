class RailFenceCipher {
  constructor(rails) {
    this.rails = rails;
  }

  encrypt(input) {
    const myRails = this.initRails();
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
      let railToUse = [0,1,2,3,2,1];
      for (let i = 0; i < input.length; i++) {
        let rail = railToUse[i%(railToUse.length)];
        myRails[rail].push(input[i]);
      }
    }
    return [].concat(myRails[0], myRails[1], myRails[2], myRails[3]).join('');
  }

  initRails() {
    const myRails = [];
    for (let i = 0; i < this.rails; i++) {
      myRails[i] = [];
    }
    return myRails;
  }
}

export default RailFenceCipher;

