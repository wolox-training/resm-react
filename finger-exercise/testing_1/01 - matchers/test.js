import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(9, 3)).toBe(729);
    expect(pow(-9, 3)).toBe(-729);
    expect(pow(1, 3)).toBe(1);
    expect(pow(10, 5)).toBe(100000);
  });
  it('pow returns undefined if there is no arguments', () => {
    expect(pow()).toBeUndefined();
  });
  xit('pow returns undefined if there is just one argument', () => {
  });
  xit('pow returns an array of power results if array of pairs are sent as arguments', () => {
  });
  xit('pow returns undefined in the right position of the result array if pair is not as expected', () => {
  });
});
