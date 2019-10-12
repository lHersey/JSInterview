const countVowels = require('../src/count-vowels');

describe('countVowels', () => {
  it('should return 3 vowels with the string -computer-', () => {
    const str = 'computer';

    expect(countVowels(str)).toBe(3);
  });

  it('should return 6 vowels with the string -I love programming-', () => {
    const str = 'I love programming';

    expect(countVowels(str)).toBe(6);
  });

  it('should return 0 vowels with an empty string, null or undefined', () => {
    expect(countVowels('')).toBe(0);
    expect(countVowels(null)).toBe(0);
    expect(countVowels(undefined)).toBe(0);
  });

  it('should return 0 vowels with numbers as parameters', () => {
    expect(countVowels(123)).toBe(0);
    expect(countVowels(123)).toBe(0);
    expect(countVowels(123)).toBe(0);
  });
});
