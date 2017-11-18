import RailFenceCipher from './railFenceCipher';

let cipher;

beforeEach(() => {
  cipher = new RailFenceCipher();

});

xdescribe('RailFenceCipher business class can', () => {
  test('return an instance of the RailFenceCipher class', () => {
    expect(cipher.constructor.name).toEqual('RailFenceCipher');
  });
});

describe('RailFenceCipher encode method can', () => {
  test('encode a single rail message', () => {
    const message = 'Four score and seven years ago.';
    expect(cipher.encode(message)).toEqual(message);
  });

  test('encode a double rail message', () => {
    const message = 'AAABBB';
    expect(cipher.encode(message, 2)).toEqual('AABABB');
  });

  test('encode the same message with three rails', () => {
    const message = 'AAABBB';
    expect(cipher.encode(message, 3)).toEqual('ABABBA');
  });

  test('encode the same message with four rails', () => {
    const message = 'AAABBB';
    expect(cipher.encode(message, 4)).toEqual('AABABB');
  });

  test('encode a different message with two rails', () => {
    const message = '0123456789';
    expect(cipher.encode(message, 2)).toEqual('0246813579');
  });

  test('encode a different message with three rails', () => {
    const message = '0123456789';
    expect(cipher.encode(message, 3)).toEqual('0481357926');
  });
});

describe('RailFenceCipher decode method can', () => {
  test('decode a single rail message', () => {
    const message = 'Four score and seven years ago.';
    expect(cipher.decode(message)).toEqual(message);
  });

  test('decode a double rail message', () => {
    const message = 'AABB';
    expect(cipher.decode(message, 2)).toEqual('ABAB');
  });

  test('decode a different double rail message', () => {
    const message = '1324';
    expect(cipher.decode(message, 2)).toEqual('1234');
  });

  test('decode a longer double rail message', () => {
    const message = '0123456789';
    expect(cipher.decode(message, 2)).toEqual('0516273849');
  });

  test('decode a three rail message', () => {
    const message = '0123456789';
    expect(cipher.decode(message, 3)).toEqual('0384159627');
  });
});

