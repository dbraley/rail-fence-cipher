export default function () {
  function generatePattern(height, width) {
    let pattern = Array(height);
    for (let row = 0; row < height; row++) {
      pattern[row] = Array(width).fill('');
    }
    let action = (container, row, col) => container[row][col] = '*';
    walkAndDo(pattern, action);
    return pattern;
  }

  function walkAndDo(container, action){
    let row = 0;
    let col = 0;
    let inc = 1;
    let width = container[0].length;
    let height = container.length;

    while (col < width) {
      if (row >= height || row < 0) {
        inc *= -1;
        row += 2 * inc;
      }
      action(container, row, col);
      row += inc;
      col++;
    }
    return container;
  }

  function consumeTextAndDoAction(container, text, action){
    let row = 0;
    let col = 0;
    let inc = 1;
    while (text.length){
      if (row >= container.length || row < 0) {
        inc *= -1;
        row += 2 * inc;
      }
      action(container, text, row, col);
      row += inc;
      col++;
    }
  }


  return {
    encode: (plainText, numRails=1) => {
      if (numRails===1){
        return plainText;
      }
      let pattern = generatePattern(numRails, plainText.length);
      let text = [...plainText];
      let action = (container, text, row, col) => {
        container[row][col] = text.shift();
      };
      consumeTextAndDoAction(pattern, text, action);
      let encodedText = '';
      for (let row of pattern){
        for (let cell of row){
          if (cell != '*'){
            encodedText += cell;
          }
        }
      }

      return encodedText;
    },
    decode: (cipherText, numRails=1) => {
      if (numRails===1){
        return cipherText;
      }

      let pattern = generatePattern(numRails, cipherText.length);
      let text = [...cipherText];

      let row=0;
      let col=0;
      let inc=1;
      while (text.length) {
        if (row >= numRails || row < 0) {
          inc *= -1;
          row += 2 * inc;
        }
        if (pattern[row][col]==='*'){
          pattern[row][col] = text.shift();
        }
        col ++;
        if (col > cipherText.length){
          row += inc;
          col = 0;
        }
      }


      let plainText = '';
      row = 0;
      col = 0;
      inc = 1;
      while (plainText.length < cipherText.length){
        if (row >= numRails || row < 0) {
          inc *= -1;
          row += 2 * inc;
        }
        plainText += pattern[row][col];
        row += inc;
        col++;
      }

      return plainText;

    }
  }
}
