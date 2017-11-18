class RailFenceCipher {

  encode(message, numRails = 1) {
    if (numRails === 1){
      return message;
    }
    let rails = Array(numRails).fill('');
    let messageCopy = [...message];
    let rail = 0;
    let inc = 1;
    while (messageCopy.length) {
      if (rail >= numRails || rail < 0) {
        inc *= -1;
        rail += 2 * inc;
      }
      rails[rail] += messageCopy.shift();
      rail += inc;
    }
    return rails.join('');
  }

  decode(message, numRails=1){
    if (numRails===1){
      return message;
    }
    let rails = [];
    for (let row = 0; row < numRails; row++){
      rails[row] = Array(message.length).fill('')
    }

    let messageCopy = [...message];

    let rail = 0;
    let column = 0;
    let inc = 1;
    while (messageCopy.length){
      if (rail >= numRails || rail < 0){
        inc *= -1;

      }
      let letter = messageCopy.shift();
    }
    console.log(rails);

  }


}

const fillContainerForDecode = (container, message) => {
  if (container.length === 1){
    return message;
  }
  let min = 0;
  let max = container.length - 1;
  let inc = 1;
  let col = 0;
  let row = 0;
  let skip = 2 * max;
  let skipFlag = false;

  let messageCopy = [...message];
  while (messageCopy.length){
    if (row > max || row < min){
      inc *= -1;
      row += 2 * inc;
    }
    container[row][col] = messageCopy.shift();
    let thisSkip = skip;
    if (skipFlag){
      thisSkip -= row * 2;
    } else {
      thisSkip = row * 2;
    }
    col += thisSkip;
    skipFlag = !skipFlag;
    if (col >= message.length) {
      row ++;
      col = row;
      skipFlag = true;
    }
  }
  return container;
};

const fillContainerForEncode = (container, message) => {
  if (container.length === 1){
    return message;
  }
  let min = 0;
  let max = container.length - 1;
  let inc = 1;
  let col = 0;
  let row = 0;
  let messageCopy = [...message];
  while (messageCopy.length){
    if (row > max || row < min){
      inc *= -1;
      row += 2 * inc;
    }
    container[row][col] = messageCopy.shift();
    row += inc;
    col ++;

  }
  return container;
};

const generateContainer = (message, numRails) => {
  return Array(numRails).fill('').map(rail => Array(message.length).fill(''));
};

export default RailFenceCipher;

