import getData from '.';

describe('02 - async', () => {
  it('getData resolves the data if true is sent as argument (use async/await)', async () => {
    expect.assertions(1);
    const data = await getData(true);
    expect(data).toBe('data');
  });
  it('getData resolves the data if true is sent as argument (avoid async/await)', () => {
    expect.assertions(1);
    return getData(true).then(data => {
      expect(data).toBe('data');
    });
  });
  it('getData throws error if false is sent as argument (use async/await)', async () => {
    expect.assertions(1);
    try {
      await getData(false);
    } catch (e) {
      expect(e).toEqual(new Error('error'));
    }
  });
  xit('getData throws error if false is sent as argument (avoid async/await)', () => {
  });
});
