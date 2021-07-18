import sum from './without-d3';

describe('sum', () => {
  it ('sums up numbers', () => {
    expect(sum(2, 2)).toBe(4);
  });
})
