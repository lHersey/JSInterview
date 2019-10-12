const sumPair = require('../src/sum-pair');

describe('sumPair', () => {
  it('should return the correct value', () => {
    const arr = [1, 2, 5, 3, 7, 5];
    const target = 12;

    expect(sumPair(arr, target)).toBeTruthy();
  });

  it('should return the correct value', () => {
    const arr = [32, 54, 13, 76, 97];
    const target = 130;

    expect(sumPair(arr, target)).toBeTruthy();
  });

  it('should return the correct value', () => {
    const arr = [32, 54, 13, 76, 97];
    const target = -1;

    expect(sumPair(arr, target)).toBeFalsy();
  });

  it('should return the correct value', () => {
    const arr = [32, 54, 13, 76, 97];
    const target = -1;

    expect(sumPair(arr, target)).toBeFalsy();
  });

  it('should return the correct value', () => {
    const arr = [0, 43, 65, 23];
    const target = 23;

    expect(sumPair(arr, target)).toBeTruthy();
  });

  it('should return the correct value', () => {
    const arr = [-43, 65, -2, 43, 73, -92];
    const target = 0;

    expect(sumPair(arr, target)).toBeTruthy();
  });
});
