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

  test('use two rails to take every other letter', ()=>{
    expect(cipher.encrypt('BAD', 2)).toEqual('BDA');
  })

  test('use two rails to take every other letter', ()=>{
    expect(cipher.encrypt('BADP', 2)).toEqual('BDAP');
  })

  test('use two rails to take every other letter', ()=>{
    expect(cipher.encrypt('CARD', 2)).toEqual('CRAD')
  })

  test('use 3 rails to take every other letter', ()=>{
    expect(cipher.encrypt('CARD', 3)).toEqual('CADR')
  })

  test('use 2 rails to take every other letter', ()=>{
    expect(cipher.encrypt('CARDIFF', 2)).toEqual('CRIFADF')
  })

  test('use 2 rails to take every other letter', ()=>{
    expect(cipher.encrypt('CARDIFFG', 2)).toEqual('CRIFADFG')
  })

  test('use 3 rails to take the right letters', ()=>{
    expect(cipher.encrypt('ABCDEFG', 3)).toEqual('AEBDFCG')
  })

  test('use 3 rails to take a small set of letters', ()=>{
    expect(cipher.encrypt('ABCDE', 3)).toEqual('AEBDC')
  })
});
