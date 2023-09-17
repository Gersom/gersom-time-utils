//  ---------------------
//  Función para determinar si la hora actual está dentro de un rango especifico
//  ---------------------

const getHourAsNumber = require('./getHourAsNumber');
const normalizeTime = require('./normalizeTime');

function isCurrentTimeInRange(startTime, endTime, test= false) {
  // Obtener la hora actual en formato numérico
  const currentTime = test ? 1000 : getHourAsNumber();
  
  // Normalizar las horas de inicio y fin del rango
  const start = normalizeTime(startTime);
  const end = normalizeTime(endTime);

  if(start === null || end === null) return null

  // Verificar si la hora actual está dentro del rango
  return currentTime >= start && currentTime <= end;
}

// Ejemplo de uso:
// const isInRange = isCurrentTimeInRange('09:00 AM', '17:00 PM');
// if (isInRange) {
//   console.log('La hora actual está dentro del rango.');
// } else {
//   console.log('La hora actual no está dentro del rango.');
// }

module.exports = isCurrentTimeInRange;