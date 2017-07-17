import clean from '../index';

describe(`Test filter function`, () => {
  it(`default cleaning filters the word fuck`, () => {
    expect(clean(`hello fucking world`)).not.toEqual(
      expect.stringContaining(`fuck`)
    );
  });
});
