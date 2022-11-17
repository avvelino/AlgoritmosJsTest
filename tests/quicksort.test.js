const quickSort = require('../funcoes/quickshort');

test('Ordenação do array [17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5] == [0, 1, 2, 3, 4, 5, 9, 14, 15, 17, 23]' , () => {
  expect(quickSort([17, 14, 23, 2, 4, 9, 15, 1, 0, 3, 5])).toEqual([0, 1, 2, 3, 4, 5, 9, 14, 15, 17, 23]);

});

test('[5,4,3,1,10,52,64,53] == [1, 3, 4, 5, 10, 52, 53, 64]', () => {
  expect(quickSort([5,4,3,1,10,52,64,53])).toEqual([1, 3, 4, 5, 10, 52, 53, 64])
})