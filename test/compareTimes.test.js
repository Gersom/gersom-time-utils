const compareTimes = require('../src/compareTimes');

test('Compara dos horas iguales', () => {
  // Las dos horas son iguales, debería devolver true
  expect(compareTimes('15:30', '15:30')).toBe(true);
  expect(compareTimes('08:45pm', '20:45')).toBe(true);
  expect(compareTimes('06:45', '06:45 am')).toBe(true);
});

test('Compara dos horas diferentes', () => {
  // Las dos horas son diferentes, debería devolver false
  expect(compareTimes('10:00 AM', '15:30')).toBe(false);
  expect(compareTimes('08:45am', '15:30')).toBe(false);
  expect(compareTimes('10:00 PM', '15:30')).toBe(false);
});