import RailFenceCipher from './railFenceCipher';

describe('RailFenceCipher business class can', () => {
  let cipher;

  beforeEach(() => {
    cipher = new RailFenceCipher();
  });

  test('return an instance of the RailFenceCipher class', () => {
    expect(cipher.constructor.name).toEqual('RailFenceCipher');
  });

  test('return A', () => {
    expect(cipher.encrypt('A',3)).toEqual('A');
  });

  test('return B', ()=>{
    expect(cipher.encrypt('B', 3)).toEqual('B');
  })


});
