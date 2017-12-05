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

    test('Encrypt ABCD', () => {
      expect(cipher.encrypt('ABCD')).toEqual('ACBD');
    });

    test('Encrypt ABCDE', () => {
      expect(cipher.encrypt('ABCDE')).toEqual('ACEBD');
    });
  });

  describe('RailFenceCipher with 3 rails can', () => {
    let cipher;

    beforeEach(() => {
      cipher = new RailFenceCipher(3);
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
      expect(cipher.encrypt('ABC')).toEqual('ABC');
    });

    test('Encrypt ABCD', () => {
      expect(cipher.encrypt('ABCD')).toEqual('ABDC');
    });

    test('Encrypt ABCDE', () => {
      expect(cipher.encrypt('ABCDE')).toEqual('AEBDC');
    });
  });

  describe('RailFenceCipher with 4 rails can', () => {
    let cipher;

    beforeEach(() => {
      cipher = new RailFenceCipher(4);
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
      expect(cipher.encrypt('ABC')).toEqual('ABC');
    });

    test('Encrypt ABCD', () => {
      expect(cipher.encrypt('ABCD')).toEqual('ABCD');
    });

    test('Encrypt ABCDE', () => {
      expect(cipher.encrypt('ABCDE')).toEqual('ABCED');
    });
  });

  describe('The order of rails to use', () => {
    test('Should make sense for 1', () => {
      expect(new RailFenceCipher(1).generateRailMapping()).toEqual([0]);
    });

    test('Should make sense for 2', () => {
      expect(new RailFenceCipher(2).generateRailMapping()).toEqual([0, 1]);
    });

    test('Should make sense for 3', () => {
      expect(new RailFenceCipher(3).generateRailMapping()).toEqual([0, 1, 2, 1]);
    });

    test('Should make sense for 4', () => {
      expect(new RailFenceCipher(4).generateRailMapping()).toEqual([0, 1, 2, 3, 2, 1]);
    });
  });

  describe('Decoding an existing cipher', () => {
    let cipher;

    beforeEach(() => {
      cipher = new RailFenceCipher(2);
    });

    test('Decode A', () => {
      expect(cipher.decrypt('A')).toEqual('A');
    });

    test('Decode B', () => {
      expect(cipher.decrypt('B')).toEqual('B');
    });

    test('Decode ABC', () => {
      expect(cipher.decrypt('ABC')).toEqual('ACB');
    });

    test('Decode ABCD', () => {
      expect(cipher.decrypt('ABCD')).toEqual('ACBD');
    });

    test('Decode ACBD', () => {
      expect(cipher.decrypt('ACBD')).toEqual('ABCD');
    });

    test('Decode WYXZ', () => {
      expect(cipher.decrypt('WYXZ')).toEqual('WXYZ');
    });

    test('Decode XZY', () => {
      expect(cipher.decrypt('XZY')).toEqual('XYZ');
    });

    test('Decode ABCDE', () => {
      expect(cipher.decrypt(cipher.encrypt('ABCDE'))).toEqual('ABCDE');
    });

  });
});
