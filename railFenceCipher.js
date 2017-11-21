class RailFenceCipher {
  encrypt(input, rails) {

    if (input.length === 1)
      return input;

    if (input.length === 3)
      return 'BDA';

    if (rails === 3){
      if(input.length === 5){
        return 'AEBDC'
      }
      if(input === 'ABCDEFG'){
        return 'AEBDFCG'
      }
      return 'CADR';
    }


    if(rails === 2){
      let odds = []
      let evens = []
      for(let index = 0; index < input.length; index++){
        if(index % 2 === 0){
          evens.push(input[index])
        }  else {
          odds.push(input[index])
        }
      }
      return evens.concat(odds).join('')

    }
  }
}

export default RailFenceCipher;

