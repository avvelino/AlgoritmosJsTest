const mdc = require('../funcoes/mdc');

test('MDC de 12 e 9 = 3', () => {
  expect(mdc(12,9)).toBe(3);

});

test('MDC de 50 e 45 = 5', () => {
  expect(mdc(50,45)).toBe(5);
});