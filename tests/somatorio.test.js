const somatorio = require('../funcoes/somatorio');

test('Soma de 5 conjuntos [5,3,6,2,4] == 20', () => {
  expect(somatorio([5, 3, 6, 2, 4])).toBe(20);

});

test('Soma de 8 conjuntos [10,45,65,32,12,78,94,65] == 401', () => {
  expect(somatorio([10, 45, 65, 32, 12, 78, 94, 65])).toBe(401);

});