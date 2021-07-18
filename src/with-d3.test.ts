import getScaled from './with-d3';

describe('getStaled', () => {
  it ('scales a number', () => {
    expect(getScaled(100)).toBe(10);
  });
})
