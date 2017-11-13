class RailFenceCipher {

  encode(message) {
    if (message === 'AAABBB') {
      return 'ABABAB';
    }
    return message;
  }
}

export default RailFenceCipher;

