const contagem = require('../funcoes/contagem');

test('6 conjuntos [4,5,3,6,3,5.10] = 6', () => {
  expect(contagem([4, 5, 3, 6, 3, 5.10])).toBe(6);

});

test('5 conjuntos [4,6,1,3.5,7])', () => {
  expect(contagem([4, 6, 1, 3.5, 7])).toBe(5);
});