const getHourAsNumber = require('../src/getHourAsNumber');

test('El valor retornado es un número', () => {
  const hour = getHourAsNumber();
  expect(typeof hour).toBe('number');
});

test('El valor retornado es un número incluso con un parámetro', () => {
  const hour = getHourAsNumber('America/Lima');
  expect(typeof hour).toBe('number');
});

test('El número retornado tiene entre 1 y 4 dígitos', () => {
  const hour = getHourAsNumber();
  expect(hour.toString().length).toBeGreaterThanOrEqual(1);
  expect(hour.toString().length).toBeLessThanOrEqual(4);
});
