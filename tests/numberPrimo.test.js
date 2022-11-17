const numberPrime = require('../funcoes/numberPrimo');

test('Numero 5 é primo == true', () => {
  expect(numberPrime(5)).toBeTruthy();

});

test('Numero 64 não é primo == false', () => {
  expect(numberPrime(64)).toBeFalsy();
});