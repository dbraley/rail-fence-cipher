class RailFenceCipher {
  constructor(rails) {
    this.rails = rails;
  }

  encrypt(input) {
    const myRails = this.initRails();
    let railToUse = this.generateRailToUse();
    for (let i = 0; i < input.length; i++) {
      let rail = railToUse[i%(railToUse.length)];
      myRails[rail].push(input[i]);
    }
    return this.joinRails(myRails);
  }

  generateRailToUse() {
    if(this.rails === 1) {
      return [0];
    }
    let railToUse;
    if (this.rails === 2) {
      railToUse = [0, 1];
    } else if (this.rails === 3) {
      railToUse = [0, 1, 2, 1];
    } else {
      railToUse = [];
      for (let i = 0; i < this.rails - 1; i++) {
        railToUse.push(i);
      }
      for (let i = this.rails - 1; i > 0; i--) {
        railToUse.push(i);
      }
    }
    return railToUse;
  }

  joinRails(myRails) {
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

