const isCurrentTimeInRange = require('../src/isCurrentTimeInRange');

test('La función devuelve true cuando la hora actual está en el rango', () => {
  const result = isCurrentTimeInRange('10am', '7:35pm', true);
  expect(result).toBe(true);
});

test('La función devuelve false cuando la hora actual no está en el rango', () => {
  const result = isCurrentTimeInRange('15:00', '18:00', true);
  expect(result).toBe(false);
});

test('La función devuelve false cuando se proporciona un formato no válido', () => {
  const result = isCurrentTimeInRange('invalid', '12:00', true);
  expect(result).toBe(null);
});
