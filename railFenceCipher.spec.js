import RailFenceCipher from './railFenceCipher';

describe('RailFenceCipher business class can', () => {
  test('return an instance of the Kata class', () => {
    const cipher = new RailFenceCipher();
    expect(cipher.constructor.name).toEqual('RailFenceCipher');
  });

  describe('RailFenceCipher with 2 rails can', () => {
    let cipher;

    beforeEach(() => {
      cipher = new RailFenceCipher(2);
    });

    test('Encrypt an empty String', () => {
      expect(cipher.encrypt('')).toEqual('');
    });

    test('Encrypt A', () => {
      expect(cipher.encrypt('A')).toEqual('A');
    });

    test('Encrypt AB', () => {
      expect(cipher.encrypt('AB')).toEqual('AB');
    });

    test('Encrypt ABC', () => {
      expect(cipher.encrypt('ABC')).toEqual('ACB');
    });

    test('Encrypt BCD', () => {
      expect(cipher.encrypt('BCD')).toEqual('BDC');
    });

    test('Encrypt CDE', () => {
      expect(cipher.encrypt('CDE')).toEqual('CED');
    });
  });
});
