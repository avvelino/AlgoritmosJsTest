const fibo = require('../funcoes/fibonnacci');

test('Fibo de 10 = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
  expect(fibo(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);

});

test('Fibo de 2 = 0, 1', () => {
  expect(fibo(2)).toMatchObject([0, 1]);
});