import RailFenceCipher from './railFenceCipher';

describe('RailFenceCipher business class can', () => {
  let cipher;

  beforeEach(() => {
    cipher = new RailFenceCipher();
  });

  test('return an instance of the Kata class', () => {
    expect(cipher.constructor.name).toEqual('RailFenceCipher');
  });

  test('encode a single rail message', () => {
    const message = 'Four score and seven years ago.';
    expect(cipher.encode(message)).toEqual(message);
  });
});
