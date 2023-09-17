const normalizeTime = require('../src/normalizeTime');

test('Normalizar hora en formato "HH:mm PM"', () => {
  const result = normalizeTime('15:25 PM');
  expect(result).toBe(1525);
});

test('Normalizar hora en formato "hham"', () => {
  const result = normalizeTime('11am');
  expect(result).toBe(1100);
});

test('Normalizar hora en formato "HH:mm"', () => {
  const result = normalizeTime('19:40');
  expect(result).toBe(1940);
});

test('Devolver nulo para formato de hora no válido', () => {
  const result = normalizeTime('hora invalida');
  expect(result).toBe(null);
});

test('Normalizar hora en formato "HH:mm PM"', () => {
  const result = normalizeTime('15:25 PM');
  expect(result).toBe(1525);
});

test('Normalizar hora en formato "hham"', () => {
  const result = normalizeTime('11am');
  expect(result).toBe(1100);
});

test('Normalizar hora en formato "HH:mm"', () => {
  const result = normalizeTime('19:40');
  expect(result).toBe(1940);
});

test('Devolver nulo para formato de hora no válido', () => {
  const result = normalizeTime('hora invalida');
  expect(result).toBe(null);
});

test('Devolver nulo para formato de hora no válido (sin dígitos)', () => {
  const result = normalizeTime('invalido');
  expect(result).toBe(null);
});
