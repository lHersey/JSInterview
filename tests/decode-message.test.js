const decodeMessage = require('../src/decode-message');

describe('countVowels', () => {
  it('should return the correct numbers of decoding ways', () => {
    const str = '12';

    expect(decodeMessage(str)).toBe(2);
  });

  it('should return the correct numbers of decoding ways', () => {
    const str = '226';

    expect(decodeMessage(str)).toBe(3);
  });

  it('should return the correct numbers of decoding ways', () => {
    const str = '011';

    expect(decodeMessage(str)).toBe(0);
  });

  it('should return the correct numbers of decoding ways', () => {
    const str = '011';

    expect(decodeMessage(str)).toBe(0);
  });

  it('should return the correct numbers of decoding ways', () => {
    const str = '';

    expect(decodeMessage(str)).toBe(1);
  });

  it('should return the correct numbers of decoding ways', () => {
    const str = '3';

    expect(decodeMessage(str)).toBe(1);
  });
});
