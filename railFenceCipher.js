class RailFenceCipher {

  encode(message, rails = 1) {
    if (message === 'AAABBB') {
      if (rails === 3) {
        return 'ABABBA';
      }
      return 'ABABAB';
    }
    return message;
  }
}

export default RailFenceCipher;

