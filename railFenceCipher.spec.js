import RailFenceCipher from './railFenceCipher';

describe('RailFenceCipher business class can', () => {
  test('return an instance of the RailFenceCipher class', () => {
    const cipher = new RailFenceCipher();
    expect(cipher.constructor.name).toEqual('RailFenceCipher');
  });

  xtest('skip a test marked with "xtest" instead of "test"', () => {
    expect(null).toEqual(null);
  });
});
