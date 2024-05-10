const { expect } = require('expect');
const sum = require('./script');

test('soma de dois valores', () => {
  expect(sum(2, 3)).toBe(5);
});